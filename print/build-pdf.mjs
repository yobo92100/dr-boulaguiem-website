// Renders the programme templates to the PDFs linked from /sujok and /homeopathie.
// Usage: node print/build-pdf.mjs [sujok|homeopathie] [out.pdf]   (needs Google Chrome installed)
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const documents = {
  sujok: ["programme-sujok-niveau1.html", "programme-formation-sujok-dr-boulaguiem.pdf"],
  homeopathie: ["programme-homeopathie.html", "programme-formation-homeopathie-dr-boulaguiem.pdf"]
};

const [only, outArg] = process.argv.slice(2);
for (const [name, [source, pdf]] of Object.entries(documents)) {
  if (only && only !== name) continue;
  const out = resolve(outArg ?? resolve(here, "../public", pdf));
  execFileSync("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    // The homeopathie template fetches its JSON from src/data over file://.
    "--allow-file-access-from-files",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${out}`,
    pathToFileURL(resolve(here, source)).href
  ], { stdio: "ignore" });
  console.log(`PDF written to ${out}`);
}
