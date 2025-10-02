function parseRomanNumeral(str) {
  const values = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    let curr = values[str[i]];
    let next = values[str[i + 1]] || 0;
    if (curr < next) {
      total -= curr;
    } else {
      total += curr;
    }
  }
  return total;
}
