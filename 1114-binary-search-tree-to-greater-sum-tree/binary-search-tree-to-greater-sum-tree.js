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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let maxSumSoFar = 0;
    const dfs = (node) => {
        if (node === null) {
            return;
        }
        dfs(node.right);
        node.val += maxSumSoFar;
        maxSumSoFar = node.val;
        dfs(node.left);
    }
    dfs(root);
    return root;
};