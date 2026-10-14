/**
 * pdf.js 6 calls Map/WeakMap.prototype.getOrInsertComputed, which most
 * Android web views (and older Chrome) do not have yet; without it every PDF
 * page draws blank. Small, spec-shaped fallbacks.
 */
type AnyMap = {
  has(k: unknown): boolean;
  get(k: unknown): unknown;
  set(k: unknown, v: unknown): unknown;
};
for (const C of [Map, WeakMap] as unknown as { prototype: AnyMap & Record<string, unknown> }[]) {
  const proto = C.prototype;
  if (typeof proto.getOrInsert !== "function") {
    Object.defineProperty(proto, "getOrInsert", {
      configurable: true,
      writable: true,
      value(this: AnyMap, key: unknown, value: unknown) {
        if (!this.has(key)) this.set(key, value);
        return this.get(key);
      },
    });
  }
  if (typeof proto.getOrInsertComputed !== "function") {
    Object.defineProperty(proto, "getOrInsertComputed", {
      configurable: true,
      writable: true,
      value(this: AnyMap, key: unknown, fn: (k: unknown) => unknown) {
        if (!this.has(key)) this.set(key, fn(key));
        return this.get(key);
      },
    });
  }
}
export {};
