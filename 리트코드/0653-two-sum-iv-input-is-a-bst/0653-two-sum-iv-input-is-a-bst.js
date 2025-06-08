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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const set = new Set();

    function dfs(node) {
        if (!node) return false;

        const complement = k - node.val;
        if (set.has(complement)) return true;

        set.add(node.val);

        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};