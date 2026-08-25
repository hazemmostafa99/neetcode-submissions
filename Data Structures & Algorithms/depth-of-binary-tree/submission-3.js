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
    maxDepth(root) {
        let level = 0
        let q = []
         if (root !== null) {
            q.push(root);
        }

        while (q.length > 0) {
            const size = q.length 
            for (let i = 0; i < size; i++) {
                const ele = q.shift()
                if (ele.left) q.push(ele.left)
                if (ele.right) q.push(ele.right)
            }

            level++
        }
        return level

    }
}
