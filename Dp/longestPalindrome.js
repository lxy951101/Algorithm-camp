const longestPalindrome = (str) => {
    const len = str.length;
    if (!len) return '';
    const dp = new Array(len).fill(0).map(() => new Array());
    let start = 0;
    let end = 0;
    // n=1的遍历
    for (let i = 0; i < len; i++) {
        dp[i][i] = 1;
    }
    // 这也是n=2的遍历，  如果等于2的情况可能出现元素互相交换
    for (let i = 0; i < len - 1; i++) {
        if (str[i] === s[i + 1]) {
            dp[i][i + 1] = 1;
            start = i;
            end = i + 1;
        }
    }
    // n 代表子串长度
    for (let n = 3; n <= len; n++) {
        for (let i = 0; i <= len - n; i++) {
            let j = i + n - 1;
            if (dp[i + 1][j - 1]) {
                if (s[i] === s[j]) {
                    dp[i][j] = 1;
                    start = i;
                    end = j;
                }
            }
        }
    }
    return s.substring(start, end + 1);
}