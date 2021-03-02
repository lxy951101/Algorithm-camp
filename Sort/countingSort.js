// 计数排序
function countingSort(arr) {
    if (arr.length <= 1) return;
    // 查找数组中的数据范围
    const max = Math.max(...arr);
    const counts = [];
    for (let i = 0; i <= max; i++) {
        counts[i] = 0;
    }
    // 计算每个元素的个数
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++; 
    }
    // 依次累加
    for (let i = 1; i <= max; i++) {
        counts[i] = counts[i - 1] + counts[i]; // 每个值将对应小于该值的数
    }
    // 临时数组，存储排序之后的结果
    const temp = [];
    // 计算排序的关键步骤，有点难理解
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = counts[arr[i]] - 1; // 计算出有多少个数比现在的数小
        temp[index] = arr[i];
        counts[arr[i]]--;
    }
    // 将结果拷贝给a数组
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
    return arr;
}

module.exports = countingSort;