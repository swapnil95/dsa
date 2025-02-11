/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let weight = 0;
    let maxSubarrayLength = 0;
    const lowestPrefixSumIndices = new Map();

    nums.forEach((num, currIndex) => {
        weight += num === 0 ? -1 : 1;
        const lowestIndex = lowestPrefixSumIndices.get(weight);
        if (weight === 0) {
            maxSubarrayLength = Math.max(currIndex + 1, maxSubarrayLength);
        } else if (typeof lowestIndex !== 'undefined') {
            subarrayLength = currIndex - lowestIndex;
            maxSubarrayLength = Math.max(subarrayLength, maxSubarrayLength);
        } else {
            lowestPrefixSumIndices.set(weight, currIndex);
        }
    })

    return maxSubarrayLength;
 };