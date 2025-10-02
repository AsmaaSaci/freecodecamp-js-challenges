function tooMuchScreenTime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) return true;
  }
  for (let i = 0; i <= arr.length - 3; i++) {
    let avg = (arr[i] + arr[i+1] + arr[i+2]) / 3;
    if (avg >= 8) return true;
  }
  let avgWeek = arr.reduce((a, b) => a + b, 0) / arr.length;
  if (avgWeek >= 6) return true;
  return false;
}
