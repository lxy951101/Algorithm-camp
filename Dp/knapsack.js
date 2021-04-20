const knapsack = (w, value, c) => {
    const n = w.lenght;
    const dp = new Array(c + 1).fill(0);
    let res = -Infinity;
    for (let i = 1; i <= n; i++) {
        for (let v = c; v >= w[i]; v--) {
            dp[v] = Math.max(dp[v], dp[v - w[i]] + value[i]);
            if (dp[v] > res) {
                res = dp[v];
            }
        }
    }
    return res;
}