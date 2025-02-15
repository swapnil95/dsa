/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) return 0;

    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;  // Base case: 0 coins are needed for amount 0

    for (let currAmount = 1; currAmount <= amount; currAmount++) {
        for (let coin of coins) {
            if (currAmount - coin >= 0) {
                dp[currAmount] = Math.min(dp[currAmount], dp[currAmount - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};
