function adjustThermostat(current, target) {
  if (current < target) return "heat";
  if (current > target) return "cool";
  return "hold";
}
