/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const numsCount = nums.length;
    const dp = new Array(numsCount).fill(1);

    let endIndex = 1;
    while(endIndex < numsCount) {
        let startIndex = 0;
        while (startIndex < endIndex) {
            if (nums[startIndex] < nums[endIndex]) {
                dp[endIndex] = Math.max(dp[endIndex], dp[startIndex] + 1);
            }
            startIndex++;
        }
        endIndex++;
    }
    let answer = dp[numsCount-1];
    for (let k = 0; k<numsCount; k++ ) {
        if(nums[k] > nums[numsCount-1]) {
            answer = Math.max(answer, dp[k])
        }
    }
    return answer
};