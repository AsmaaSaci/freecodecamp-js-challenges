function sendMessage(arr) {
    let distance = arr.reduce((a, b) => a + b, 0);
    let time = distance / 300000;
    let delay = (arr.length - 1) * 0.5;
    let total = time + delay;
    return parseFloat(total.toFixed(4));
}
