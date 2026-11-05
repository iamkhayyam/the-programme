// Copy the revised paper PDFs and HTML versions into public/files/ so the site serves them.
// Runs before `vite build` (see package.json). public/files/ is generated and git-ignored.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const papersDir = join(root, "papers");
const outDir = join(root, "public", "files");
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const dir of readdirSync(papersDir).filter((d) => /^p0\d-/.test(d)).sort()) {
  const id = dir.slice(0, 3);
  const files = readdirSync(join(papersDir, dir));
  const pdf = files.find((f) => f.endsWith(".pdf"));
  if (!pdf) throw new Error(`no PDF in ${dir}`);
  cpSync(join(papersDir, dir, pdf), join(outDir, `${id}.pdf`));
  if (existsSync(join(papersDir, dir, `${id}.html`))) cpSync(join(papersDir, dir, `${id}.html`), join(outDir, `${id}.html`));
  for (const img of files.filter((f) => /\.(png|jpe?g|svg)$/i.test(f))) cpSync(join(papersDir, dir, img), join(outDir, img));
}
console.log(`copied papers to ${outDir}`);
