/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const floorCount = cost.length;
    // minCost[i] === Minimum cost to get to floor i
    const minCost = new Array(floorCount+1);
    
    minCost[0] = 0;
    minCost[1] = 0;
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