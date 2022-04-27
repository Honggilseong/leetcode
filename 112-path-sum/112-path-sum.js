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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let answer = false;
    let sum = 0;
    function helper(root, current) {
        if(!root || answer) return;
        
        current += root.val
        
        if(!root.left && !root.right && current === targetSum) answer=true
        
        helper(root.left, current)
        helper(root.right, current)
    }
    helper(root, 0)
    return answer;
};