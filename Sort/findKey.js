// 分区
function partition(arr, start, end) {
    const pivot = arr[end]; // 选择最后一个点查找其位置
    let i = start;
    let j = start;
    while (j < end) { // 将大于end点的数依次排列在前，若小于就放置于原地等待交换
        if (arr[j] > pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
        j++;
    }
    // 将比end大的元素都置于end前后，就可以确定end的位置了
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
}
// 求第k大元素
function findKey(arr, start = 0, end, k) {
    end = typeof end === 'undefined' ? arr.length - 1 : end;
    if (end <= start) return undefined;
    const p = partition(arr, start, end);
    if (p + 1 === k) {
        return arr[p];
    }
    const a1 = findKey(arr, start, p - 1, k);
    if (typeof a1 !== 'undefined') {
        return a1;
    }
    const a2 = findKey(arr, p + 1, end, k);
    if (typeof a2 !== 'undefined') {
        return a2;
    }
    return undefined;
}
