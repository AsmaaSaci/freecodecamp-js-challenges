function getWords(paragraph) {
  let words = paragraph
    .toLowerCase()
    .replace(/[.,!]/g, "")
    .split(/\s+/);

  let freq = {};
  for (let w of words) {
    if (w) freq[w] = (freq[w] || 0) + 1;
  }

  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .slice(0, 3);
}
