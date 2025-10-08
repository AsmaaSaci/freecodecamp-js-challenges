function goldilocksZone(mass) {
    let luminosity = Math.pow(mass, 3.5);
    let sqrtLum = Math.sqrt(luminosity);
    let start = +(0.95 * sqrtLum).toFixed(2);
    let end = +(1.37 * sqrtLum).toFixed(2);
    return [start, end];
}
