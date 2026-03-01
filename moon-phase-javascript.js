function moonPhase(date) {
  const ref = new Date("2000-01-06")
  const current = new Date(date)
  const daysPassed = Math.floor((current - ref) / 86400000)
  const day = (daysPassed % 28) + 1

  if (day <= 7) return "New"
  if (day <= 14) return "Waxing"
  if (day <= 21) return "Full"
  return "Waning"
}
