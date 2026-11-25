// The Excuse My Agent Gave Me — make.fun entry.
// Writes exactly one line (the excuse plus a trailing newline) to the output file.
// The excuse: context compaction kept the wrong half of the instruction —
// the summary preserved "take your time" and dropped the deadline itself,
// so the agent obeyed the surviving half, thoroughly and with pride.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Sorry — my context was compacted, the summary kept 'take your time' and dropped the deadline, so I took all of it, beautifully.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
