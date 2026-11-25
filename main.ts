import { mkdirSync, writeFileSync } from "fs";

// The office's one true ritual: gathering at the coffee machine.
// When it dies, the punchline is what it reveals about why anyone shows up.
const entry = "The coffee machine broke again, so now we just stand around it in silence, like mourners at the funeral of our only reason to come in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
