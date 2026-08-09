class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
   hasDuplicate(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (seen.has(element)) return true;
    seen.add(element);
  }
  return false;
}
}
