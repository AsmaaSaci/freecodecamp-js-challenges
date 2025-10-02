function isMirror(str1, str2) {
  let clean1 = str1.replace(/[^a-zA-Z]/g, "");
  let clean2 = str2.replace(/[^a-zA-Z]/g, "");
  let reversed2 = clean2.split("").reverse().join("");
  return clean1 === reversed2;
}
