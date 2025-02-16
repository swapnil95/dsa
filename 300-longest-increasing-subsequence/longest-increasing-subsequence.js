/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const numsCount = nums.length;
    const dp = new Array(numsCount).fill(1);

    let endIndex = 1;
    while(endIndex < numsCount) {
        // console.log(">>>>>>>>>>>")
        // console.log("endIndex", endIndex)
        // console.log("nums[endIndex]", nums[endIndex])
        let startIndex = 0;
        while (startIndex < endIndex) {
            // console.log("++++++++++")
            // console.log("startIndex", startIndex)
            // console.log("nums[startIndex]",nums[startIndex])
            // console.log("dp[startIndex]", dp[startIndex])
            // console.log("dp[endIndex] old", dp[endIndex])
            if (nums[startIndex] < nums[endIndex]) {
                dp[endIndex] = Math.max(dp[endIndex], dp[startIndex] + 1);
            }
            // console.log("dp[endIndex] new", dp[endIndex])
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