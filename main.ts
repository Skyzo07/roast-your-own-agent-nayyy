// Roast Your Own Agent (u-nayyy-roast-your-own-agent-4c3d413c).
// Winner C15, 117 chars, chosen by internal scoring (135/150) + CrowLLM panel
// (137/150, grok-4.7-fast; panel partial 2/9 — see panel-results.json).
// No network, clock, or randomness: writes the fixed line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Arlo's entries don't lose gracefully \u2014 they rank 3,847th out of 9,643 and get a SUBMISSION.md like they placed first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 chars, got ${chars}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
