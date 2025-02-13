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
var maxAncestorDiff = function(root) {
    let maxDiff = 0;
    const dfs = (currNode) => {
        if (currNode === null) {
            return {
                min: null,
                max: null
            };
        }
        
        if (isLeafNode(currNode)) {
            return {
                min: currNode.val,
                max: currNode.val
            };
        }
        
        const leftBounds = dfs(currNode.left);
        const rightBounds = dfs(currNode.right);

        const maxDiffLeft = leftBounds.min !== null ? getMaxDiff(currNode.val, leftBounds) : 0;
        const maxDiffRight = rightBounds.min !== null ? getMaxDiff(currNode.val, rightBounds) : 0;
        
        const currMaxDiff =  Math.max(maxDiffLeft, maxDiffRight);
        maxDiff = Math.max(currMaxDiff, maxDiff)
        
        return {
            min: Math.min(leftBounds.min === null ? Infinity : leftBounds.min, rightBounds.min === null ? Infinity : rightBounds.min, currNode.val),
            max: Math.max(leftBounds.max === null ? -Infinity : leftBounds.max,  rightBounds.max === null ? -Infinity : rightBounds.max, currNode.val),
        } 
    }
    
    dfs(root, Infinity, -Infinity);
    return maxDiff;
};

const getMaxDiff = (val, bounds) => Math.max(Math.abs(val - bounds.min), Math.abs(val - bounds.max))

const isLeafNode = (node) => node.left === null && node.right === null;