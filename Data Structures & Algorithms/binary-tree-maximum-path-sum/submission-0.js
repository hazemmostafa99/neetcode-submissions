/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        this.maxSum = -Infinity
        const dfs = (node)=>{
            if(!node) return 0
            const left = Math.max(0, dfs(node.left))
            const right = Math.max(0, dfs(node.right))
            this.maxSum = Math.max(this.maxSum,  node.val + left + right)
            return node.val + Math.max(left , right)
        }
        dfs(root)
        return this.maxSum
    }
}
