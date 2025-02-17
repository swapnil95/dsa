/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winnersCount = new Map();
    const losersCount = new Map();
    const winners = [];
    const losers = [];
    
    for (let match of matches) {
        const winner = match[0];
        const loser = match[1];
        
        winnersCount.set(winner, (winnersCount.get(winner) || 0) + 1);
        losersCount.set(loser, (losersCount.get(loser) || 0) + 1);
    }
    
    for ( const player of winnersCount.keys()) {
        if (!losersCount.get(player)) {
            winners.push(player)
        }
    }
    
    for ( const [player, lostMatches] of losersCount.entries()) {
        if (lostMatches === 1) {
            losers.push(player)
        }
    }
    winners.sort((a, b) => a - b)
    losers.sort((a, b) => a - b)
    return [winners, losers]
};