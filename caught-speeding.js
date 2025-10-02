function speeding(speeds, limit) {
  let over = speeds.filter(s => s > limit);
  if (over.length === 0) return [0, 0];
  let avg = over.reduce((a, b) => a + (b - limit), 0) / over.length;
  return [over.length, avg];
}
