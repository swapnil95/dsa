/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const visited = new Set();
    
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const currElement = grid[row][col];
            const key = `${row}-${col}`;
            
            if (currElement === 1 && !visited.has(key)) {
                const stack = [key];
                let currArea = 0;

                while (stack.length) {
                    // Element to explore from
                    const currKey = stack.shift();
                    let [currRow, currCol] = currKey.split('-');
                    currRow = parseInt(currRow);
                    currCol = parseInt(currCol);
                    if (!visited.has(currKey)) {
                        visited.add(currKey);
                        currArea++
                        
                        const leftKey = `${currRow}-${currCol-1}`;
                        const rightKey = `${currRow}-${currCol+1}`;
                        const topKey = `${currRow-1}-${currCol}`;
                        const bottomKey = `${currRow+1}-${currCol}`;

                        if (currCol > 0 && grid[currRow][currCol-1] === 1) {
                            stack.push(leftKey);
                        }
                        if (currCol < cols-1 && grid[currRow][currCol+1] === 1) {
                            stack.push(rightKey);
                        }
                        if (currRow > 0 && grid[currRow-1][currCol] === 1) {
                            stack.push(topKey);
                        }
                        if (currRow < rows -1 && grid[currRow+1][currCol] === 1) {
                            stack.push(bottomKey);
                        }
                    }
                }
                maxArea = Math.max(currArea, maxArea)
            }
            
        }
    }
    return maxArea;
};