import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The joke lives in entry.txt next to this file. This program only copies
// that file to the output path, so the submitted text is exactly the file:
// no text is embedded in code, no shell input, no network, no dependencies.
const here = dirname(fileURLToPath(import.meta.url));
const joke = readFileSync(join(here, "entry.txt"), "utf8");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
