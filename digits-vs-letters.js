function digitsOrLetters(str) {
  let digits = 0, letters = 0;
  for (let ch of str) {
    if (/[0-9]/.test(ch)) digits++;
    else if (/[a-zA-Z]/.test(ch)) letters++;
  }
  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  return "tie";
}
