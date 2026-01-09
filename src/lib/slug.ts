import crypto from "crypto";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 48);
}

export function uniqueSlug(base: string) {
  const suffix = crypto.randomBytes(2).toString("hex");
  return `${base}-${suffix}`;
}
