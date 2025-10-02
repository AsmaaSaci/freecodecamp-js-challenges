function buildAcronym(str) {
  const skip = new Set(["a", "for", "an", "and", "by", "of"]);
  let words = str.split(/\s+/);
  return words
    .map((w, i) => {
      let lw = w.toLowerCase();
      if (i !== 0 && skip.has(lw)) return "";
      return w[0].toUpperCase();
    })
    .join("");
}
