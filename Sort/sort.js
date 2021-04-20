// 冒泡排序
// 思想：每次会将最大数的排在末尾，并不断缩小要排序的区间，最后一个数排除掉
const bubbleSort = (nums) => {
    // 外层循环用于控制从头到尾的比较+交换到底多少轮（比较的轮数）
    for (let i = 0; i < nums.length; i++) {
        // 本轮是否进行过交换
        let flag = false;
        // 内层循环用于完成每一轮遍历过程中的重复比较+交换（本次需要进行的比较次数）
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                flag = true;
            }
        }
        // 若某一轮里未发生交换，则说明已经完成排序
        if (!flag) {
            return nums;
        }
    }
    return nums;
}

// 选择排序；
// 思想是每次选择区间中最小的数，放在最前面，区间不断缩小，直至只剩下最后一个元素
const selectionSort = (nums) => {
    let minIndex;
    // 遍历排序区间，最后一个数不用遍历是因为，它只需要和前面的数做比较就可以了
    for (let i = 0; i < nums.length - 1; i++) {
        // 记录当前区间下的最小索引
        minIndex = i;
        // i和j表示当前区间的左右边界
        for (let j = i; i < nums.length; j++) {
            if (nums[minIndex] > nums[j]) {
                minIndex = j;
            }
        }
        // 若最小索引不为左边界，则进行交换，将最小值置于左边界
        if (minIndex !== i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
        }
    }
    return nums;
}

// 插入排序
// 思想：从开始到最后，将元素放入到已经排好序的区间内
const insertionSort = (nums) => {
    // temp用于记录要插入的元素
    let temp;
    for (let i = 1; i < nums.length; i++) {
        let j = i;
        // 记录当前元素
        temp = arr[i];
        // 找位置进行插入
        while (j > 0 && nums[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}

// 归并排序
// 核心思想：不断分割数组，并合并
const mergeSort = (nums) => {
    if (nums.length <= 1) {
        return arr;
    }
    // 合并数组
    const mergeArr = (arr1, arr2) => {
        let i = 0, j = 0;
        const res = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                res.push(arr1[i++]);
            } else {
                res.push(arr2[j++]);
            }
        }
        while (i < arr1.length) {
            res.push(arr1[i++]);
        }
        while (j < arr2.length) {
            res.push(arr2[j++]);
        }
    }
    // 分割数组
    const low = 0;
    const high = nums.length - 1;
    const mid = (high + low) >> 1;
    const leftArr = mergeSort(nums.slice(0, mid));
    const rightArr = mergeSort(nums.slice(mid, nums.length));
    const arr = mergeArr(leftArr, rightArr);
    return arr;
}

// 快速排序
// 核心思想：确定一个基准值，以基准值为轴，两边的元素相互比较并交换
const partition = (nums, left, right) => {
    const mid = left + ((right - left) >> 1);
    const pivotValue = nums[mid];
    let i = left;
    let j = right;
    while (i <= j) {
        while (nums[i] < pivotValue) {
            i++;
        }
        while (nums[j] > pivotValue) {
            j--;
        }
        if (i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (nums, left = 0, right = arr.length - 1) => {
    if (nums.length > 1) {
        const lineIndex = partition(arr, left, right);
        if (left < lineIndex - 1) {
            quickSort(nums, left, lineIndex - 1);
        }
        if (linxIndex < right) {
            quickSort(nums, lineIndex, right);
        }
    }
    return nums;
}
