function maxSubarrayLength(nums: number[], k: number): number {
    let startIndex = 0;
    let endIndex = 0;
    let longestGoodLength = 0;
    const count = new Map();

    while(endIndex < nums.length) {
        // console.log("endIndex", endIndex)
        const currNum = nums[endIndex];
        const currCount = count.get(currNum) || 0;
        if (currCount < k) {
            count.set(currNum, currCount + 1);
        } else {
            while(true) {
                const startNum = nums[startIndex];
                count.set(startNum, count.get(startNum) - 1);
                startIndex++;
                if(count.get(currNum) === currCount - 1) {
                    count.set(currNum, count.get(currNum) + 1);
                    break;
                }
            }
        }
        longestGoodLength = Math.max(longestGoodLength, endIndex - startIndex + 1);
        endIndex++;
    }
    return longestGoodLength;
};