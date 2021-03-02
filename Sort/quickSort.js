// 分区
function partition(arr, start, end) {
    const pivot = arr[end]; // 选择最后一个点查找其位置
    let i = start;
    let j = start;
    while (j < end) { // 将小于end点的数依次排列在前，若大于就放置于原地等待交换
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
        j++;
    }
    // 将比end小的元素都置于end前后，就可以确定end的位置了
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
}
// 快速排序
function quickSort(arr, start = 0, end) {
    end = typeof end === 'undefined' ? arr.length - 1 : end;
    if (end <= start) return arr;
    const q = partition(arr, start, end);
    quickSort(arr, start, q - 1);
    quickSort(arr, q + 1, end);
    return arr;
}

function quickSortGenerator(arr) {
    if (arr.length <= 1) return arr;
    const stack = [[0, arr.length - 1]];
    while (stack.length) {
        const [left, right] = stack.pop();
        if (left < right) {
            // const mid = (left  + right) >> 1;
            // const leftValue = arr[left];
            // const rightValue = arr[right];
            // const midValue = arr[mid];
            // if (leftValue < rightValue)
            const pivot = arr[right]; // 取分区点
            let i = left;
            let j = left;
            while (j < right) {
                if (arr[j] < pivot) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    i++;
                }
                j++;
            }
            [arr[i], arr[right]] = [arr[right], arr[i]];
            stack.push([left, i - 1]);
            stack.push([i + 1, right]);
        }
    }
    return arr;
}
// export default quickSort;

module.exports = quickSortGenerator;