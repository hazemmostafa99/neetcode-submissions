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
     * @return {number[]}
     */
    rightSideView(root) {
        this.res = []

        const dfs = (node, depth) => {
            if (!node) return null
            if (this.res.length === depth) {
                this.res.push(node.val)
            }
            dfs(node.right,  depth + 1)
            dfs(node.left,  depth + 1)
        }
        dfs(root, 0)
        return this.res
    }
}
