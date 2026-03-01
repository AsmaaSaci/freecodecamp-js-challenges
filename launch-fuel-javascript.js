function launchFuel(payload) {
  let mass = payload
  let prevFuel = 0

  while (true) {
    let fuel = mass / 5
    if (fuel - prevFuel < 1) return Number(fuel.toFixed(1))
    mass = payload + fuel
    prevFuel = fuel
  }
}
