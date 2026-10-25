import { readFile } from "node:fs/promises";

const routes = [
  ["dist/index.html", "Your next app starts here."],
  ["dist/about.html", "Built for a clean start."],
];

for (const [path, expected] of routes) {
  const html = await readFile(path, "utf8");
  if (!html.includes(expected)) {
    throw new Error(`${path} did not render its route content`);
  }
}

process.stdout.write("Web route smoke test passed.\n");
