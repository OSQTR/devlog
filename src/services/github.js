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

export async function fetchMarkdownContent(url) {
  const res = await fetch(url);
  return res.text();
}
