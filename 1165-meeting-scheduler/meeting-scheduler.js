/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    slots1 = slots1.sort(sortFn);
    slots2 = slots2.sort(sortFn);

    let first = 0;
    let second = 0;

    while (first < slots1.length && second < slots2.length) {
        const [s1, e1] = slots1[first];
        const [s2, e2] = slots2[second];
        const minEnd = Math.min(e1, e2);
        const maxStart = Math.max(s1, s2);

        if (minEnd - maxStart >= duration) {
            return [maxStart, maxStart + duration];
        }

        // Move the one that ends first
        if (e2 < e1) {
            second++;
        } else {
            first++;
        }
    }
    return []
};

const sortFn = (a, b) => a[0] - b[0]
