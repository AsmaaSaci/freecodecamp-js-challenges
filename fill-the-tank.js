function costToFill(tankSize, fuelLevel, pricePerGallon) {
  let gallonsNeeded = tankSize - fuelLevel;
  let cost = gallonsNeeded * pricePerGallon;
  return "$" + cost.toFixed(2);
}
