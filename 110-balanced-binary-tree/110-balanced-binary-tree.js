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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let answer = true
    
    function helper(root) {
        if(!root) return 0;
        
        let left = helper(root.left)
        let right = helper(root.right)
        
        if(Math.abs((left - right) > 1) || Math.abs((right - left) > 1)) answer = false;
        
        return 1 + Math.max(left, right)
    }
    helper(root)
    return answer;
};