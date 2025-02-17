/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    const uniqueNumbers = new Set(arr);
    let numCount = 0;
    
    for (let num of arr) {
        if(uniqueNumbers.has(num+1)) {
            numCount++;
        }
    }
    
    return numCount;
};