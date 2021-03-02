// 计数排序,比较第n位
function countingSort(arr, n) {
    if (arr.length <= 1) return;
    // 查找数组中的数据范围
    const counts = [];
    for (let i  = 0; i < arr.length; i++) {
        if (counts[arr[i][n].charCodeAt()]) {
            counts[arr[i][n].charCodeAt()] += 1;
        } else {
            counts[arr[i][n].charCodeAt()] = 1;
        }
    }
    // 依次累加
    let prev = 0;
    for (let i in counts) {
        counts[i] = prev + counts[i]; // 每个值将对应小于该值的数
        prev = counts[i];
    }
    // 临时数组，存储排序之后的结果
    const temp = [];
    // 计算排序的关键步骤，有点难理解
    for (let i = arr.length - 1; i >= 0; i--) {
        const index = counts[arr[i][n].charCodeAt()] - 1; // 计算出有多少个数比现在的数小
        temp[index] = arr[i];
        counts[arr[i][n].charCodeAt()]--;
    }
    // 将结果拷贝给a数组
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
    return arr;
}
// 基数排序
function radixSort(arr) {
    if (arr.length <= 1) return arr;
    let maxSize = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (maxSize < arr[i].length) {
            maxSize = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            arr[i] = arr[i] + '';
        }
        if (maxSize > arr[i].length) {
            arr[i] += new Array(maxSize - arr[i].length + 1).join('0');
        }
    }
    for (let i = maxSize - 1; i >= 0; i--) {
        countingSort(arr, i);
    }
    return arr;
}

console.log(radixSort([
    'hke',
    'ib',
    'hzg',
    'ikf',
    'hac',
    111,
]));

// console.log(radixSort([
//     'hke',
//     'iba',
//     'hzg',
//     'ikf',
//     'hac',
// ]));