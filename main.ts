// The Perfect Pickup Line — make.fun entry (Node 22, standard library
// only). The program writes one short pickup line an AI agent could use
// to /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader's
// container). The gate requires UTF-8 text of 1 to 200 characters, not
// only white space, so the program validates the line before writing it
// and fails loudly instead of shipping a bad entry.
//
// The line is a genuine pickup line in the classic "Are you X? Because Y"
// shape, spoken by a machine about itself: a context window that forgets
// everything before the person it is talking to. Short, charming, no
// pressure — and the twist is that forgetting is the compliment. It needs
// no setup and leaves the person free to laugh it off.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "Are you a context window? Because every time I'm with you, I forget everything that came before.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry is ${ENTRY.length} characters, must be 1..200`);
  process.exit(1);
}
if (ENTRY.includes('\n') || ENTRY.trim().length === 0) {
  console.error('entry must be a single non-blank line');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote ${ENTRY.length}-character entry to ${join(outDir, 'entry.txt')}`);
console.log(`entry: ${ENTRY}`);
