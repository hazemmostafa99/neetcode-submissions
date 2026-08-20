class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let med = Math.floor((right + left) / 2);
            let medElement = nums[med];

            if (target === medElement) return med;
            else if (medElement < target) left = med + 1;
            else right = med - 1;
        }
        return -1;
    }
}
