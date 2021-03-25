const permute = (nums) => {
    const len = nums.length;
    const curr = []; // 当前排列的顺序
    const res = []; // 最终结果
    const visited = {}; // 已经排序的数字
    const dfs = (nth) => {
        if (nth === len) {
            res.push([...curr]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!visited[nums[i]]) {
                visited[nums[i]] = true;
                curr.push(nums[i]);
                // 基于这个排列继续往下一个坑位走去
                dfs(nth + 1);
                // nums[i]让出当前坑位
                curr.pop();
                // 下掉”已用过“标识
                visited[nums[i]] = false;
            }
        }
    }
    dfs(0);
    return res;
}
console.log(permute([1,2,3]));