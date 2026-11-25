import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about office life, for the
// "Make the AI Judge Laugh: Office Jokes" bounty on make.fun.
const entry =
  "The office printer only jams when the document is urgent, so I mark everything 'not urgent' now. It still knows.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
