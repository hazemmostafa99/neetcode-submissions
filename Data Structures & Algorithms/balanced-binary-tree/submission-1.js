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
        const getHight = (node)=>{

            if(!node) return {
                hight: 0,
                balanced: true
            }

            const left = getHight(node.left)
            const right = getHight(node.right)
            const hight = 1 + Math.max(left.hight, right.hight)
            const balanced = left.balanced && right.balanced && 
                Math.abs(left.hight - right.hight) <= 1

            return {
                hight,
                balanced
            }
        }
        return getHight(root).balanced
    }
}
