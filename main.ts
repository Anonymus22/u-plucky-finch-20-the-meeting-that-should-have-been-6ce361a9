// The Meeting That Should Have Been an Email
// Writes one single-line joke (at most 200 characters) to /output/entry.txt.
// Node 22+ TypeScript, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Nine people spent an hour listening to someone read an email aloud, then scheduled a follow-up meeting to discuss replying by email.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outPath = join("/output", "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
