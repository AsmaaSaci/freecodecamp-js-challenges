function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}
