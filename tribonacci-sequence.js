function tribonacciSequence(startSequence, length) {
  let result = startSequence.slice(0, length);
  for (let i = 3; i < length; i++) {
    result[i] = result[i - 1] + result[i - 2] + result[i - 3];
  }
  return result;
}
