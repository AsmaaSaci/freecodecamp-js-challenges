function hasExoplanet(readings) {
    let values = readings.split('').map(ch => {
        if (/[0-9]/.test(ch)) return +ch;
        return ch.charCodeAt(0) - 55;
    });
    let avg = values.reduce((a, b) => a + b, 0) / values.length;
    let threshold = avg * 0.8;
    return values.some(v => v <= threshold);
}
