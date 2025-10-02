function getLongestWord(sentence) {
  let words = sentence.replace(/\./g, "").split(" ")
  let longest = ""
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word
    }
  }
  return longest
}
