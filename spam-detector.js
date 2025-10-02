function isSpam(number) {
  let match = number.match(/^\+(\d+)\s\((\d{3})\)\s(\d{3})-(\d{4})$/);
  if (!match) return true;
  let [, country, area, first3, last4] = match;
  country = country.toString();
  area = parseInt(area);
  first3 = first3.toString();
  last4 = last4.toString();
  if (country.length > 2 || country[0] !== "0") return true;
  if (area > 900 || area < 200) return true;
  let sumFirst3 = first3.split("").reduce((a, b) => a + parseInt(b), 0);
  if (last4.includes(sumFirst3.toString())) return true;
  let digitsOnly = number.replace(/\D/g, "");
  if (/(.)\1{3,}/.test(digitsOnly)) return true;
  return false;
}
