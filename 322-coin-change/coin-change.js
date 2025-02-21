/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = {};
    const dfs = (rem) => {
        if (rem < 0) {
            return -1
        }
        if (rem === 0) {
            return 0;
        }
        let minCost = Infinity;
        for (let coin of coins) {
            const result = dp[rem-coin] || dfs(rem-coin);
            if (result !== -1) {
                minCost = Math.min(minCost, result);
            }
        }
        const answer = minCost === Infinity ? -1 : minCost + 1;
        dp[rem] = answer;
        return answer;
    }

    return dfs(amount)
};
