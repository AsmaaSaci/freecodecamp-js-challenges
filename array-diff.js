function arrayDiff(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let diff = [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
  return diff.sort();
}
