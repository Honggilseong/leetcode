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
var isSymmetric = function(root) {
    let answer = true;
    
    function symmetricChecker (p,q) {
        if(!p && !q) return;
        
        if(!p || !q || p.val !== q.val){
            answer = false;
            return;
        }
        
        symmetricChecker(p.left, q.right)
        symmetricChecker(p.right, q.left)
    }
    
    
    symmetricChecker(root,root)
    return answer;
};