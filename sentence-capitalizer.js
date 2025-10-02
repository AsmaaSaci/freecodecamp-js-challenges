function capitalize(paragraph) {
  return paragraph.replace(/(^|[.!?]+)\s*([a-z])/g, (match, before, char) => before + char.toUpperCase());
}
