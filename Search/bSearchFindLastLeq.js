/**
 * 查找最后一个小于等于给定值的元素
 * @param {*} arr 
 * @param {*} value 
 */
function bSearchFindLastLeq(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (arr[mid] <= value) {
            if ((mid === arr.length - 1) || (arr[mid + 1] > value)) {
                return mid;
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] > value) {
            high = mid - 1;
        }
    }
    return -1;
}

console.log('bSearchFindLastLeq:', bSearchFindLastLeq([0,1,3,3,3,3,3,3,3,3,7,8,9], 4));

module.exports = bSearchFindLastLeq;