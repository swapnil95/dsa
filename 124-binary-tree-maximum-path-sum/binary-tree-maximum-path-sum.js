/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxPathSum = -Infinity;

    const getMaxPath = (node) => {
        if (node === null) {
            return 0;
        }
        let maxSumLeft = getMaxPath(node.left);
        let maxSumRight = getMaxPath(node.right);
        maxSumLeft = maxSumLeft > -1 ? maxSumLeft : 0;
        maxSumRight = maxSumRight > -1 ? maxSumRight : 0 ;
        const maxSumCurr = maxSumLeft + maxSumRight + node.val;
        maxPathSum = Math.max(maxSumCurr, maxPathSum);
        return Math.max(maxSumLeft, maxSumRight) + node.val;
    }
    getMaxPath(root);
    return maxPathSum;
};