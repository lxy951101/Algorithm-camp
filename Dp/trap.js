/**
 * @param {number[]} height
 * @return {number}
 */
 const trap = function(height) {
    // 初始化左指针
    let leftCur = 0  
    // 初始化右指针
    let rightCur = height.length - 1  
    // 初始化最终结果
    let res = 0  
    // 初始化左侧最高的柱子
    let leftMax = 0    
    // 初始化右侧最高的柱子
    let rightMax = 0  
    
    // 对撞指针开始走路
    while(leftCur < rightCur) {
        // 缓存左指针所指的柱子的高度
        const left = height[leftCur]  
        // 缓存右指针所指的柱子的高度
        const right = height[rightCur]  
        // 以左右两边较矮的柱子为准，选定计算目标
        if(left < right) {
            // 更新leftMax
            leftMax = Math.max(left, leftMax)  
            // 累加蓄水量
            res += leftMax - left
            // 移动左指针
            leftCur++
        } else {
            // 更新rightMax
            rightMax = Math.max(right, rightMax)
            // 累加蓄水量
            res += rightMax - right  
            // 移动右指针
            rightCur-- 
        }
    }
    // 返回计算结果
    return res
};