function repeatVowels(str) {
  let count = 0;
  return str.replace(/[aeiou]/gi, v => {
    count++;
    return v + v.toLowerCase().repeat(count - 1);
  });
}
