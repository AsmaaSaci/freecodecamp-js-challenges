function isPerfectSquare(n) {
  if (n < 0) return false;
  let root = Math.sqrt(n);
  return Number.isInteger(root);
}
