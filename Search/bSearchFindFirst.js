/**
 * 查找第一个值等于给定值的元素
 * @param {*} arr 
 * @param {*} value 
 */
function bSearchFindFirst(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = low + ((high - low) >> 1)
        if (arr[mid] > value) {
            high = mid - 1;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else {
            if ((mid === 0) || (arr[mid - 1] !== value)) {
                return mid;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

console.log('bSearchFindFirst:', bSearchFindFirst([1,2,3,3,3,3,3,3,3,3,7,8,9], 3));

module.exports = bSearchFindFirst;