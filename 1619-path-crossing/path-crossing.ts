function isPathCrossing(path: string): boolean {
    const visited = new Set<string>();
    let x = 0, y = 0;
    visited.add(`${x},${y}`);

    for (let direction of path) {
        if (direction === 'N') y++;
        else if (direction === 'S') y--;
        else if (direction === 'E') x++;
        else if (direction === 'W') x--;

        const key = `${x},${y}`;
        if (visited.has(key)) {
            return true; // We've been here before
        }
        visited.add(key);
    }

    return false;
}
