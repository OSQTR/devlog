const USER = "osqtr";
const REPO = "devlog";
const DIR = "logs";

export async function fetchMarkdownList() {
  const res = await fetch(
    `https://api.github.com/repos/${USER}/${REPO}/contents/${DIR}`,
  );

  const data = await res.json();

  return data
    .filter((file) => file.name.endsWith(".md"))
    .sort((a, b) => b.name.localeCompare(a.name));
}

export async function fetchMarkdownContent(url) {
  const res = await fetch(url);
  return await res.text();
}
