function frequencySort(s: string): string {
    const countMap = new Map();
    const seen = new Set();
    for (let char of s) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
        seen.add(char);
    }
    let asnwer = ''
    while(seen.size) {
        // console.log(seen.size)
        let nextCount = 0;
        let nextChar = '';
        for (let [char, count] of countMap.entries()) {
            if (!seen.has(char)) {
                continue;
            }
            if (nextCount < count) {
                nextCount = count;
                nextChar = char;
            }
        }
        asnwer += nextChar.repeat(nextCount);
        seen.delete(nextChar);
    }
    return asnwer;
};