function capitalize(paragraph) {
  return paragraph.replace(/(^|[.!?]+)(\s*)([a-z])/g, (match, before, spaces, char) => before + spaces + char.toUpperCase());
}
