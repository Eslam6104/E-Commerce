// يحوّل أي نص لـ slug بسيط
export function slugify(text) {
  return text
    ?.toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
export function makeProductSlug(title, id) {
  const base = slugify(title);
  return id ? `${base}-${id}` : base;
}
export function parseProductSlug(slug) {
  if (!slug) return { id: null, title: "" };

  const parts = slug.split("-");
  const last = parts[parts.length - 1];
  const maybeId = Number(last);
  const hasId = !Number.isNaN(maybeId);

  const titleParts = hasId ? parts.slice(0, -1) : parts;
  const title = titleParts.join(" ");

  return {
    id: hasId ? maybeId : null,
    title,
  };
}
