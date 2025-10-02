function isValidIPv4(str) {
  let parts = str.split(".");
  if (parts.length !== 4) return false;
  return parts.every(p => {
    if (!/^\d+$/.test(p)) return false;
    if (p.length > 1 && p[0] === "0") return false;
    let num = Number(p);
    return num >= 0 && num <= 255;
  });
}
