/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];

    let prev = nums[0];
    let prev2 = 0;

    for (let house = 1; house <= nums.length-1; house ++) {
        const curr = nums[house] + prev2;
        const maxGold = Math.max(curr, prev);
        prev2 = prev;
        prev = maxGold;
    }

    return prev;
};