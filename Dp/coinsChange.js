// 找硬币
const coinsChange = (coins, amount) => {
    // 用于保存每个目标总额对应的最小硬币个数
    const f = [];
    // 提前定义已知情况
    f[0] = 0;
    // 遍历 [1, amount] 这个区间的硬币总额
    for (let i = 1; i <= amount; i++) {
        // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
        f[i] = Infinity;
        // 循环遍历每个可用硬币的面额
        for (let j = 0; j < coins.length; i++) {
            // 若硬币面额小于目标总额，则问题成立
            if (i - coins[j] >= 0) {
                // 状态转移方程
                f[i] = Math.min(f[i], f[i - coins[j]] + 1);
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1;
    }
    return f[amount];
}