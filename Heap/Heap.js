// 对于索引为 n 的结点来说：

// 索引为 (n-1)/2 的结点是它的父结点
// 索引 2*n+1 的结点是它的左孩子结点
// 索为引 2*n+2 的结点是它的右孩子结点

// 向下对比加交换(大堆顶)
const downHeap = (heap, low, high) => {
    let i = low, j = i * 2 + 1; // j为左孩子，j + 1为右孩子
    while (j <= high) {
        // 若右孩子较左孩子大，则用右孩子和根结点比较
        if (j + 1 <= high && heap[j + 1] > heap[j]) {
            j = j + 1;
        }
        // 若当前结点比孩子结点小，则交换两者位置，把较大结点拱上去
        if (heap[i] < heap[j]) {
            [heap[i], heap[j]] = [heap[j], heap[i]];
            i = j;
            j = j * 2 + 1;
        } else {
            break;
        }
    }
}

// 向上对比交换（大堆顶）
const upHeap = (heap, low, high) => {
    let i = high;
    let j = (i - 1) >> 1; // 父节点
    while (j >= low) {
        if (heap[j] < heap[i]) {
            [heap[j], heap[i]] = [heap[i], heap[j]];
            i = j;
            j = (i - 1) >> 1;
        } else {
            break;
        }
    }
}

// 利用小堆顶查第k大的值
const findKthLargest = (nums, k) => {
    const heap = [];
    let n = 0;
    const len = nums.length;
    const downHeap = (low, high) => {
        let i = low; 
        let j = i * 2 + 1; // 左孩子
        while (j <= high) { // 界限之内
            if (j + 1 <= high && heap[j + 1] < heap[j]) { // 若右孩子小于左孩子，则与右孩子比较
                j = j + 1;
            }
            if (heap[i] > heap[j]) { // 若当前结点大于左右孩子中较小的结点，则交换两者位置，把较小的结点拱上去
                [heap[j], heap[i]] = [heap[i], heap[j]];
                i = j; // i更新为孩子结点的索引
                j = j * 2 + 1; // j 更新孩子结点的左孩子节点的索引
            } else {
                break;
            }
        }
    }
    const upHeap = (low, high) => {
        let i = high;
        let j = (i - 1) >> 1;
        while (j >= low) { 
            // 当前结点比父结点小
            if (heap[j] > heap[i]) {
                [heap[j], [heap[i]]] = [heap[i], heap[j]];
                i = j;
                j = (i - 1) >> 1;
            } else {
                break;
            }
        }
    }
    const insert = (x) => {
        heap[n] = x;
        upHeap(0, n);
        n++;
    }
    const createHeap = () => {
        for (let i = 0; i < k; i++) {
            insert(nums[i]);
        }
    }
    const updateHeap = () => {
        for (let i = k; i < len; i++) {
            for (let i = k; i < len; i++) {
                if (nums[i] > heap[0]) {
                    heap[0] = nums[i];
                    downHeap(0, k);
                }
            }
        }
    }
    createHeap();
    updateHeap();
    return heap[0];
}