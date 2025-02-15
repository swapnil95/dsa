/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount <= 0) return 0;
    const dp = new Array(amount).fill(-1);
    let currAmount = 1;
    while (currAmount <= amount) {
        let prevMin = -1; 
        for (let coin of coins) {
            const prevAmountPossible = currAmount - coin;
            // console.log("prevAmountPossible", prevAmountPossible)
            if (prevAmountPossible < 0) continue;
            
            if (prevAmountPossible === 0) { 
                // console.log("sdfsdfsdfsdfsdf")
                prevMin = 0
                break;
            }
            
            const a = dp[prevAmountPossible];
            // console.log("a", a)
            
            if(a === -1) continue;
            prevMin = prevMin > -1 ? Math.min(prevMin,  a) : a;
        }
        // console.log("prevMin", prevMin)
        dp[currAmount] = prevMin === -1 ? -1 : prevMin + 1;
        // console.log(dp)
        currAmount++;
    }
    return dp[amount]
};