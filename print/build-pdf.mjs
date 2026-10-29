// Renders print/programme-sujok-niveau1.html to the PDF linked from /sujok.
// Usage: node print/build-pdf.mjs [out.pdf]   (needs Google Chrome installed)
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = pathToFileURL(resolve(here, "programme-sujok-niveau1.html")).href;
const out = resolve(process.argv[2] ?? resolve(here, "../public/programme-formation-sujok-dr-boulaguiem.pdf"));

execFileSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--allow-file-access-from-files",
  "--virtual-time-budget=5000",
  `--print-to-pdf=${out}`,
  source
], { stdio: "inherit" });
console.log(`PDF written to ${out}`);
