function findMissingNumbers(arr) {
  let n = Math.max(...arr);
  let set = new Set(arr);
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) result.push(i);
  }
  return result;
}
