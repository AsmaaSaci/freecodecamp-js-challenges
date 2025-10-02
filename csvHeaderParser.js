function getHeadings(firstLine) {
  return firstLine.split(",").map(h => h.trim())
}
