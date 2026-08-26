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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(cur){
            if(!cur) return 0
            let l = dfs(cur.left)
            if(l === -1) return - 1
            let r = dfs(cur.right)
            if(r === -1) return - 1

            if (Math.abs(l - r) > 1) return -1
            return 1 + Math.max(l, r)
        }
        return dfs(root) !== -1;
    }
}
