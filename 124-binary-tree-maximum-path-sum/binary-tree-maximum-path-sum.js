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
        const maxSumLeft = Math.max(0, getMaxPath(node.left));
        const maxSumRight = Math.max(0, getMaxPath(node.right));
        const maxSumCurr = maxSumLeft + maxSumRight + node.val;
        maxPathSum = Math.max(maxSumCurr, maxPathSum);
        return Math.max(maxSumLeft, maxSumRight) + node.val;
    }
    getMaxPath(root);
    return maxPathSum;
};