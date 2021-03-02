// 插入排序
function insertionSort(arr) {
    if (arr.length <= 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        const value = arr[i];
        let j = i - 1;
        // 计算j的位置，同时将数组索引j后的顺序后移
        for (;j >= 0; j--) {
            if (value < arr[j]) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = value;
    }
    return arr;
}

module.exports = insertionSort;
