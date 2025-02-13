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
var diameterOfBinaryTree = function(root) {
    let longestPath = 0;
    const dfs = (root) => {
        if (root === null) {
            return 0;
        }
        
        if (isLeafNode(root)) {
            return 1;
        }
        
        const longestLineLeft = dfs(root.left);
        const longestLineRight = dfs(root.right);
        
        const currLongestPath = longestLineLeft + longestLineRight;
        longestPath = Math.max(longestPath, currLongestPath);
        
        return Math.max(longestLineLeft, longestLineRight) + 1;
    }
    dfs(root);
    return longestPath;
};

const isLeafNode = (node) => node.left === null && node.right === null;