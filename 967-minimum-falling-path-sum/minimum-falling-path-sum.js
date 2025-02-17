/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const rows = matrix.length + 1;
    const cols = matrix[0].length + 2;
    const dp = [];
    for (let i = 0; i<rows; i++) {
        dp.push(new Array(cols).fill(Infinity));
    }
    
    for(let row = rows-2; row >=0; row--) {
        for(let col = cols-2; col >=1; col--) {
            const sumBelow = dp[row+1][col];
            const sumDiagonalLeft = dp[row+1][col-1]; 
            const sumDiagonalRight = dp[row+1][col+1];
            const currValue = matrix[row][col-1];
            if (sumBelow === Infinity && sumDiagonalLeft === Infinity && sumDiagonalRight === Infinity) {
                dp[row][col] = currValue;
            } else {
                 const prevMin = Math.min(sumDiagonalRight, sumDiagonalLeft, sumBelow);
                dp[row][col] = prevMin + currValue;   
            }
        }
    }
    
    let lowestSum = Infinity;
    
    for (let col = 0; col<cols; col++) {
        lowestSum = Math.min(lowestSum, dp[0][col]);
    }
    
    return lowestSum;
};