const arr = [4,5,6,1,2,3];
function bSearch(arr, value) {
    const n = arr.length;
    if (n === 0) {
        return -1;
    }
    if (n === 1) {
        return arr[0] === value ? 0 : -1;
    }
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (arr[mid] === value) {
            return mid;
        }
        if (arr[0] <= arr[mid]) { // 0 - mid 有序
            if (arr[0] <= value && value < arr[mid]) { // 位于有序区间
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // mid - n - 1 有序
            if (arr[mid] < value && value <= arr[n - 1]) { // 位于有序区间
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

console.log('二分查找：', bSearch(arr, 2));

module.exports = bSearch;