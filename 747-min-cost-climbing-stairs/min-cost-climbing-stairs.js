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
    
    for(let step = 2; step <= floorCount; step++) {
        const prevFloor = minCost[step-1] + cost[step - 1];
        const curr = minCost[step-2] + cost[step-2];
        minCost[step] = Math.min(prevFloor, curr); 
    }
    return minCost[floorCount];
};