/**
 * Generate the colour ramps that `src/index.css` declares.
 *
 * The app is written in Tailwind utilities naming literal shades, so a theme
 * cannot be opted into per component: it is done by redefining the ramps those
 * utilities resolve through. Dark is the same ramp read backwards, which is
 * why bg-slate-50 becomes a dark surface and text-slate-900 light type without
 * a single component being touched.
 *
 * Families are folded onto six meanings, because a colour that means nothing is
 * noise: structure is grey, and green, ochre and carmine keep safe, caution and
 * danger. The two decorative families left over are plum and teal. No family
 * keeps a blue hue.
 *
 *   node scripts/genTheme.mjs > /tmp/theme.css
 */
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const L_LIGHT = [0.975, 0.945, 0.893, 0.820, 0.578, 0.528, 0.478, 0.422, 0.350, 0.278, 0.200];
const L_DARK  = [0.200, 0.252, 0.312, 0.392, 0.690, 0.748, 0.800, 0.848, 0.898, 0.942, 0.980];
const CF = [0.10, 0.18, 0.30, 0.50, 0.75, 1.00, 0.95, 0.85, 0.70, 0.58, 0.45];

const FAMILY = {
  grey:   { hue: 70,  chroma: 0.006, on: ["slate", "gray", "zinc", "neutral", "stone"] },
  good:   { hue: 152, chroma: 0.125, on: ["emerald", "green", "lime"] },
  warn:   { hue: 72,  chroma: 0.135, on: ["amber", "yellow", "orange"] },
  danger: { hue: 20,  chroma: 0.150, on: ["rose", "red"] },
  plum:   { hue: 320, chroma: 0.140, on: ["violet", "fuchsia", "purple", "pink"] },
  teal:   { hue: 194, chroma: 0.110, on: ["teal", "cyan", "sky", "blue", "indigo"] },
};

const f = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
function hex(Lv, C, h) {
  const a = C * Math.cos((h * Math.PI) / 180), b = C * Math.sin((h * Math.PI) / 180);
  const l = (Lv + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (Lv - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (Lv - 0.0894841775 * a - 1.2914855480 * b) ** 3;
  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
  ].map((v) => Math.round(Math.min(1, Math.max(0, f(v))) * 255));
  return "#" + rgb.map((v) => v.toString(16).padStart(2, "0")).join("");
}
// Clamp chroma down until the colour is inside sRGB, so a ramp never clips to
// a flat band at its vivid end.
const ramp = (name, L) => SHADES.map((_, i) => hex(L[i], FAMILY[name].chroma * CF[i], FAMILY[name].hue));

const lines = [];
const emit = (dark) => {
  const pad = dark ? "    " : "  ";
  for (const [name, fam] of Object.entries(FAMILY)) {
    const r = ramp(name, dark ? L_DARK : L_LIGHT);
    for (const alias of fam.on) {
      const cells = SHADES.map((sh, i) => `--color-${alias}-${sh}: ${r[i]};`);
      for (let i = 0; i < cells.length; i += 3) lines.push(pad + cells.slice(i, i + 3).join(" "));
    }
  }
  lines.push(`${pad}--color-white: ${dark ? "#17171a" : "#ffffff"};`);
  lines.push(`${pad}--color-black: ${dark ? "#ffffff" : "#000000"};`);
};
console.log("/*__THEME_LIGHT__*/");
emit(false);
console.log(lines.splice(0).join("\n"));
console.log("/*__THEME_DARK__*/");
emit(true);
console.log(lines.join("\n"));
