/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length;
    const cols = obstacleGrid[0].length
    const dp = [];
    for (let i = 0; i < rows + 1; i++) {
        dp.push(new Array(cols + 1).fill(0));
    }
    for(let i = rows-1; i >=0; i--) {
        for(let j = cols-1; j>=0; j--) {
            if (obstacleGrid[i][j] === 1) {
                continue;
            }
            if (i === rows-1 && j === cols-1) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i+1][j] + dp[i][j+1];
            }
        }
    }
    return dp[0][0]
};