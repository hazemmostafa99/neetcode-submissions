class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};

        for (const word of strs) {
            const sorted = word.split("").sort().join("");

            if (sorted in obj) {
                obj[sorted].push(word);
            } else {
                obj[sorted] = [word];
            }
        }
        return Object.values(obj);
    }
}
