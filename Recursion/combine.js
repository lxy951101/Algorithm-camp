const combine = (nums, k) => {
    const res = [];
    const subset = [];
    function dfs(nth) {
        if (subset.length === k) {
            res.push([...subset]);
            return;
        }
        for (let i = nth; i < nums.length; i++) {
            subset.push(nums[i]);
            dfs(i + 1);
            subset.pop();
        }
    }
    dfs(0);
    return res;
}

console.log(combine([1,2,3], 2));