/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const floorCount = cost.length;
    let minCosrCurr;
    let minCostPrev = 0;
    let minCostPrev2 = 0;
    
    for(let step = 2; step <= floorCount; step++) {
        minCosrCurr = Math.min(minCostPrev + cost[step - 1], minCostPrev2 + cost[step-2]);
        let temp = minCostPrev;
        minCostPrev = minCosrCurr;
        minCostPrev2 = temp;
    }
    return minCosrCurr;
};