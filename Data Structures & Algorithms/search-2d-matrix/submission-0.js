class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let arr of matrix) {
            let right = arr.length - 1;
            if (arr[right] >= target) {
                let left = 0;
                while (left <= right) {
                    let med = Math.floor((right + left) / 2);
                    let medEle = arr[med];

                    if (target === medEle) return true;
                    if (target < medEle) right = med - 1;
                    if (target > medEle) left = med + 1;
                }
            }
        }
        return false;
    }
}
