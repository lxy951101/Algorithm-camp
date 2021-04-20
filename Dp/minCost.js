const costs = [[17,2,17],[16,16,5],[14,3,19]];
/**
 * @param {number[][]} costs
 * @return {number}
 */
 const minCost = function(costs) {
    // 处理边界情况
    if(!costs || !costs.length) return 0 
    // 缓存房子的个数
    const len = costs.length
    // 开始更新状态
    for(let i=1;i<len;i++) {  
        // now表示粉刷到当前房子时对应的价格状态
        const now = costs[i]  
        // prev表示粉刷到上一个房子时的价格状态
        const prev = costs[i-1]  
        // 更新当前状态下，刷三种油漆对应的三种最优价格
        now[0] += Math.min(prev[1], prev[2])  
        now[1] += Math.min(prev[0], prev[2])  
        now[2] += Math.min(prev[1], prev[0])
    }
    // 返回粉刷到最后一个房子时，总价格的最小值
    return Math.min(costs[len-1][0], costs[len-1][1], costs[len-1][2])
};
console.log(minCost(costs));