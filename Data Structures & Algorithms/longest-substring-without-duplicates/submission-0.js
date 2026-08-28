class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set()
        let maxLength = 0
        let l= 0
        for(let r = 0; r < s.length; r++){
            while(seen.has(s[r])){
                seen.delete(s[l])
                l++
            }
            seen.add(s[r])
            maxLength = Math.max(maxLength, r- l + 1)
           
        }
        return maxLength
    }
}
