// 合并区间
const merge = (intervals) => {
    if (!intervals || intervals.length === 0) return [];
    const len = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];
    for (let i = 1; i < len; i++) {
        prev = res[res.length - 1];
        if (prev[1] >= intervals[i][0]) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
        } else {
            res.push(intervals[i]);
        }
    }
    return res;
}