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
        const prevFloor = minCostPrev + cost[step - 1];
        const curr = minCostPrev2 + cost[step-2];
        minCosrCurr = Math.min(prevFloor, curr);
        let temp = minCostPrev;
        minCostPrev = minCosrCurr;
        minCostPrev2 = temp;
    }
    return minCosrCurr;
};