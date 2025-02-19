/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const visitedVertices = new Map();
    
    for (let i = 0; i <= n; i++ ) {
        visitedVertices.set(i, [])
    }

    for (let edge of edges) {
        const [firstVertex, secondVertex] = edge;
        visitedVertices.get(firstVertex).push(secondVertex)
        visitedVertices.get(secondVertex).push(firstVertex)
    }
    
    const verticesChecked = new Set();
    const pathExists = (startVertex) => {
        if (startVertex === destination) {
            return true;
        }
        const stack = [startVertex];
        
        while (stack.length) {
            const vertex = stack.pop();
            if (verticesChecked.has(vertex)) {
                continue;
            }
            verticesChecked.add(vertex)
            const neighbours = visitedVertices.get(vertex);
            for (let neighbour of neighbours) {
                if (neighbour === destination) {
                    return true;
                }
                stack.push(neighbour)
            }
        }
        return false;  
    }
    
    return pathExists(source);
};