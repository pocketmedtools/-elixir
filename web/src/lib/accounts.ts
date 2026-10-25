/**
 * On-device accounts and saved calculations.
 *
 * Profiles (name + phone) and their saved entries live in this device's
 * localStorage only — nothing is sent anywhere, which keeps the app
 * offline-capable and private. Phone-number OTP sign-in requires a server
 * and an SMS provider; when one is configured this module is the seam to
 * swap in.
 */

export type Profile = {
  id: string;
  name: string;
  phone: string;
  /** SHA-256(phone:password) hex — device-local protection, not server auth. */
  passHash?: string;
  createdAt: number;
};

export type SavedEntry = {
  id: string;
  profileId: string;
  tool: string;
  title: string;
  detail: string;
  at: number;
};

const PROFILES_KEY = "POCKETMED_PROFILES";
const CURRENT_KEY = "POCKETMED_CURRENT_PROFILE";
const ENTRIES_KEY = "POCKETMED_SAVED";

type Listener = () => void;
const listeners = new Set<Listener>();
let version = 0;

function emit() {
  version++;
  for (const l of listeners) l();
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getVersion(): number {
  return version;
}

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — profiles simply won't persist */
  }
}

export function getProfiles(): Profile[] {
  return read<Profile[]>(PROFILES_KEY, []);
}

export function getCurrentProfile(): Profile | null {
  const id = read<string | null>(CURRENT_KEY, null);
  return getProfiles().find((p) => p.id === id) ?? null;
}

async function hashPassword(phone: string, password: string): Promise<string> {
  const data = new TextEncoder().encode(`${phone}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export type AuthResult =
  | { ok: true; profile: Profile }
  | { ok: false; error: string };

export async function signUp(
  name: string,
  phone: string,
  password: string,
): Promise<AuthResult> {
  const ph = phone.trim();
  // Phone number doubles as the username; a display name is optional.
  const n = name.trim() || ph;
  if (!/^[\d+][\d\s-]{7,14}$/.test(ph))
    return { ok: false, error: "Enter a valid phone number (8–15 digits)." };
  if (password.length < 6)
    return { ok: false, error: "Password must be at least 6 digits or characters." };
  const profiles = getProfiles();
  if (profiles.some((p) => p.phone === ph))
    return { ok: false, error: "This phone number already has an account — sign in instead." };
  const profile: Profile = {
    id: `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    name: n,
    phone: ph,
    passHash: await hashPassword(ph, password),
    createdAt: Date.now(),
  };
  write(PROFILES_KEY, [...profiles, profile]);
  write(CURRENT_KEY, profile.id);
  emit();
  // Fire-and-forget signup notice to the maintainer (disclosed on the
  // sign-up screens); delivery failure never blocks account creation.
  import("./reportChannel")
    .then(({ sendToInbox }) =>
      sendToInbox("Pocket-Med new signup", {
        phone: ph,
        signed_up_at: new Date().toISOString(),
        app_url: typeof window !== "undefined" ? window.location.href : "",
      }),
    )
    .catch(() => {});
  return { ok: true, profile };
}

export async function signIn(phone: string, password: string): Promise<AuthResult> {
  const ph = phone.trim();
  const profile = getProfiles().find((p) => p.phone === ph);
  if (!profile) return { ok: false, error: "No account with this phone number — sign up first." };
  if (profile.passHash) {
    const h = await hashPassword(ph, password);
    if (h !== profile.passHash) return { ok: false, error: "Wrong password." };
  } else if (password) {
    // Legacy passwordless profile: adopt the first password entered.
    profile.passHash = await hashPassword(ph, password);
    write(PROFILES_KEY, getProfiles().map((p) => (p.id === profile.id ? profile : p)));
  }
  write(CURRENT_KEY, profile.id);
  emit();
  return { ok: true, profile };
}

export function signOut() {
  write(CURRENT_KEY, null);
  emit();
}

export function saveCalculation(tool: string, title: string, detail: string): boolean {
  const profile = getCurrentProfile();
  if (!profile) return false;
  const entries = read<SavedEntry[]>(ENTRIES_KEY, []);
  entries.unshift({
    id: `e${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
    profileId: profile.id,
    tool,
    title: title.slice(0, 120),
    detail: detail.slice(0, 2000),
    at: Date.now(),
  });
  write(ENTRIES_KEY, entries.slice(0, 500));
  emit();
  return true;
}

export function getEntries(): SavedEntry[] {
  const profile = getCurrentProfile();
  if (!profile) return [];
  return read<SavedEntry[]>(ENTRIES_KEY, []).filter((e) => e.profileId === profile.id);
}

export function deleteEntry(id: string) {
  const entries = read<SavedEntry[]>(ENTRIES_KEY, []);
  write(ENTRIES_KEY, entries.filter((e) => e.id !== id));
  emit();
}

// ---------- Forgot password: phone number + 4-digit code ----------
/**
 * Accounts live on this device, so there is no server to send an SMS from.
 * `requestPasswordReset` is the seam: today it hands the code back to the screen;
 * with an SMS provider (e.g. Firebase Phone Auth) it would text it instead.
 */
const CODE_TTL_MS = 5 * 60000;
const MAX_TRIES = 5;

type PendingReset = { phone: string; code: string; expires: number; tries: number; verified: boolean };
let pending: PendingReset | null = null;

function fourDigits(): string {
  const n = new Uint32Array(1);
  crypto.getRandomValues(n);
  return String(n[0] % 10000).padStart(4, "0");
}

export type ResetStart =
  | { ok: true; code: string; expiresInMin: number }
  | { ok: false; error: string };

/** Step 1: phone number must belong to an account on this device. */
export function requestPasswordReset(phone: string, now = Date.now()): ResetStart {
  const ph = phone.trim();
  if (!getProfiles().some((p) => p.phone === ph))
    return { ok: false, error: "No account with this phone number on this device." };
  pending = { phone: ph, code: fourDigits(), expires: now + CODE_TTL_MS, tries: 0, verified: false };
  return { ok: true, code: pending.code, expiresInMin: CODE_TTL_MS / 60000 };
}

/** Step 2: check the 4-digit code (5 tries, valid 5 minutes). */
export function verifyResetCode(phone: string, code: string, now = Date.now()): { ok: true } | { ok: false; error: string } {
  const ph = phone.trim();
  if (!pending || pending.phone !== ph) return { ok: false, error: "Request a new code first." };
  if (now > pending.expires) {
    pending = null;
    return { ok: false, error: "Code expired — tap Resend code." };
  }
  if (pending.tries >= MAX_TRIES) {
    pending = null;
    return { ok: false, error: "Too many wrong tries — tap Resend code." };
  }
  if (code.trim() !== pending.code) {
    pending.tries++;
    const left = MAX_TRIES - pending.tries;
    if (left <= 0) pending = null;
    return { ok: false, error: left > 0 ? `Wrong code — ${left} ${left === 1 ? "try" : "tries"} left.` : "Too many wrong tries — tap Resend code." };
  }
  pending.verified = true;
  return { ok: true };
}

/** Step 3: set the new password (only after the code was verified) and sign in. */
export async function resetPassword(phone: string, newPassword: string, now = Date.now()): Promise<AuthResult> {
  const ph = phone.trim();
  if (!pending || pending.phone !== ph || !pending.verified || now > pending.expires + CODE_TTL_MS)
    return { ok: false, error: "Verify the code first." };
  if (newPassword.length < 6)
    return { ok: false, error: "Password must be at least 6 digits or characters." };
  const profile = getProfiles().find((p) => p.phone === ph);
  if (!profile) return { ok: false, error: "No account with this phone number on this device." };
  const updated = { ...profile, passHash: await hashPassword(ph, newPassword) };
  write(PROFILES_KEY, getProfiles().map((p) => (p.id === profile.id ? updated : p)));
  write(CURRENT_KEY, profile.id);
  pending = null;
  emit();
  return { ok: true, profile: updated };
}
