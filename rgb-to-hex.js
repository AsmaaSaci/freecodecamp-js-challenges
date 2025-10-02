function rgbToHex(rgb) {
  let nums = rgb.match(/\d+/g).map(Number);
  return "#" + nums.map(x => {
    let hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}
