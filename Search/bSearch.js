function bSearch(arr, value, compare = (a, b) => a - b) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        const compareValue = compare(arr[mid], value);
        if (compareValue === 0) {
            return mid;
        } else if (compareValue < 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

/**
 * 递归法实现二分查找
 * @param {*} arr 
 * @param {*} value 
 * @param {*} low 
 * @param {*} high 
 * @param {*} compare 
 */
function bSearchByRecursion(arr, value, low = 0, high, compare = (a, b) => a - b) {
    high = high ?? arr.length - 1;
    if (low <= high) {
        const mid = low + ((high - low) >> 1);
        const compareValue = compare(arr[mid], value);
        if (compareValue === 0) {
            return mid;
        } else if (compareValue < 0) {
            return bSearchByRecursion(arr, value, mid + 1, high);
        } else {
            return bSearchByRecursion(arr, value, low, mid - 1);
        }
    }
    return -1;
}

console.log('二分查找：', bSearch([1,2,3,4,5,6,7,8,9,10],8), );

module.exports = bSearch;