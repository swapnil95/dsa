/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const graph = new Map();
    
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    
    for (let edge of edges) {
        const [ source, destination ] = edge;
        graph.get(source).push(destination);
        graph.get(destination).push(source);
    }

    const visitedVertices = new Set();
    let connectComponents = 0;
    
    for (let vertex = 0; vertex < n; vertex++) {
        if (visitedVertices.has(vertex)) {
            continue;
        }

        connectComponents++;
        const stack = [vertex];
        
        while (stack.length) {
            const currVertex = stack.pop();
            const isVisited = visitedVertices.has(currVertex);
            
            if (!isVisited) {
                visitedVertices.add(currVertex);
            }
            
            
            const neighbours = graph.get(currVertex);
            for (let neighbour of neighbours) {
                if (!visitedVertices.has(neighbour)) {
                     visitedVertices.add(neighbour);
                    stack.push(neighbour)
                }
               
            }
        }
    }
    return connectComponents;
};