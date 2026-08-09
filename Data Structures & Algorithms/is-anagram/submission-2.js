class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const str1 = {};
        const str2 = {};

        for (let i = 0; i < s.length; i++) {
            str1[s[i]] = str1[s[i]] ? str1[s[i]] + 1 : 1;
            str2[t[i]] = str2[t[i]] ? str2[t[i]] + 1 : 1;
        }

        for (const char in str1) {
            if (str1[char] !== str2[char]) {
                return false;
            }
        }

        return true;
    }
}
