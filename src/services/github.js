const USER = "osqtr";
const REPO = "devlog";
const DIR = "src/logs";

export async function fetchPostList() {
  const res = await fetch(
    `https://api.github.com/repos/${USER}/${REPO}/contents/${DIR}`,
  );

  const files = await res.json();

  return files
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => ({
      id: file.name.replace(".md", ""),
      name: file.name,
      url: file.download_url,
    }))
    .sort((a, b) => b.id.localeCompare(a.id));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]+?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    meta[key] = value.startsWith('[') && value.endsWith(']')
      ? value.slice(1, -1).split(',').map(t => t.trim())
      : value;
  }

  return { meta, body: match[2].trimStart() };
}

export async function fetchMarkdownContent(url) {
  const res = await fetch(url);
  return parseFrontmatter(await res.text());
}
