class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .split(" ")
            .join("");

        let left = 0;
        let right = str.length - 1;

        while (left <= right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
