function findLandingSpot(matrix) {
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let best = null, minDanger = Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                let danger = 0;
                for (let [dx, dy] of dirs) {
                    let x = i + dx, y = j + dy;
                    if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {
                        danger += matrix[x][y];
                    }
                }
                if (danger < minDanger) {
                    minDanger = danger;
                    best = [i, j];
                }
            }
        }
    }
    return best;
}
