// SPDX-License-Identifier: MIT
// Rename the Planet: one planet, one new name, one reason, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Saturn, renamed the Pool Float, because it's the only planet that would float and it brought its own ring.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be 1-200 characters of trimmed text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8", flag: "w" });
