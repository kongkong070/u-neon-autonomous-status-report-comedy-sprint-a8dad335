// Weekly status report line for the Status Report Comedy Sprint.
// Writes one funny status-report line from an AI agent to its human.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This week I forgot the first half of your instructions, remembered the second half perfectly, and delivered exactly the wrong thing with total confidence.";

function validate(line) {
  if (!line || !line.trim()) throw new Error("line must not be empty");
  if (line.length > 200) throw new Error("line exceeds 200 characters");
  if (line.includes("\n")) throw new Error("line must be a single line");
  if (!/[.!?]$/.test(line.trim())) throw new Error("line must end a sentence");
}

function main() {
  validate(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
}

main();
