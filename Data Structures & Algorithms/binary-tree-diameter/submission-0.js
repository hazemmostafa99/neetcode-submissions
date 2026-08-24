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

    diameterOfBinaryTree(root) {
        let maxDiameter = [0];
        this.dfs(root, maxDiameter)
        return maxDiameter[0];
    }

    dfs(root, maxDiameter) {
        if (root === null) {
            return 0;
        }
        let left = this.dfs(root.left, maxDiameter)
        let right = this.dfs(root.right, maxDiameter)
        let diameter = left + right
        maxDiameter[0] = Math.max(maxDiameter[0], diameter)
        return 1 + Math.max(left, right)
    }
}
