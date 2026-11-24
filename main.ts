import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "The office printer only jams when the document is urgent, which is how I know it reads the filenames.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
