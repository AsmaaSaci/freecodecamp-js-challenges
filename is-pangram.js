function isPangram(sentence, letters) {
  let lower = sentence.toLowerCase();
  let set = new Set(lower.replace(/[^a-z]/g, ""));
  return set.size === letters.length && [...letters.toLowerCase()].every(l => set.has(l));
}
