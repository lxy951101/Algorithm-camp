const nums = [1,3,-1,-3,5,3,6,7];

// 方法一：常规方法 O(kn）
const calMax = (nums, left, right) => { 
    let max = -Infinity;
    while (left < right) {
        if (max < nums[left]) {
            max = nums[left];
        }
        left++;
    }
    return max;
}

const maxSlidingWindow = (nums, k) => { // 时间复杂度O(kn)
    let left = 0;
    let right = k - 1;
    const result = [];
    while (right < nums.length) { // 时间复杂度 O(n)
        const max = calMax(nums, left, right); // 时间复杂度O(k)
        result.push(max);
        left++;
        right++;
    }
    return result;
}

// 使用双端队列

// 每一步都做了什么：

// 检查队尾元素，看是不是都满足大于等于当前元素的条件。如果是的话，直接将当前元素入队。否则，将队尾元素逐个出队、直到队尾元素大于等于当前元素为止。
// 将当前元素入队
// 检查队头元素，看队头元素是否已经被排除在滑动窗口的范围之外了。如果是，则将队头元素出队。
// 判断滑动窗口的状态：看当前遍历过的元素个数是否小于 k。如果元素个数小于k，这意味着第一个滑动窗口内的元素都还没遍历完、第一个最大值还没出现，此时我们还不能动结果数组，只能继续更新队列；如果元素个数大于等于k，这意味着滑动窗口的最大值已经出现了，此时每遍历到一个新元素（也就是滑动窗口每往前走一步）都要及时地往结果数组里添加当前滑动窗口对应的最大值（最大值就是此时此刻双端队列的队头元素）。
// 这四个步骤分别有以下的目的：

// 维持队列的递减性：确保队头元素是当前滑动窗口的最大值。这样我们每次取最大值时，直接取队头元素即可。
// 这一步没啥好说的，就是在维持队列递减性的基础上、更新队列的内容。
// 维持队列的有效性：确保队列里所有的元素都在滑动窗口圈定的范围以内。
// 排除掉滑动窗口还没有初始化完成、第一个最大值还没有出现的特殊情况。

const maxSlidingWindowV2 = (nums, k) => { // 时间复杂度O(n)
    const result = [];
    const deque = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[deque[deque.length -  1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }
        if (i >= k - 1) {
            result.push(nums[deque[deque.length - 1]]);
        }
    }
    return result;
}