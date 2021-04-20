/**
 * @param {number[]} heights
 * @return {number}
 */
 const largestRectangleArea = function(heights) {
    // 判断边界条件
    if(!heights || !heights.length) return 0 
    // 初始化最大值
    let max = -1  
    // 缓存柱子长度
    const len = heights.length
    // 遍历每根柱子
    for(let i=0;i<len;i++) {
        // 如果遍历完了所有柱子，或者遇到了比前一个矮的柱子，则停止遍历，开始回头计算
        if(i == len-1 || heights[i]>heights[i+1]) {
            // 初始化前i个柱子中最矮的柱子
            let minHeight = heights[i]  
            // “回头看”
            for(let j=i;j>=0;j--) {
                // 若遇到比当前柱子更矮的柱子，则以更矮的柱子为高进行计算
                minHeight = Math.min(minHeight, heights[j])  
                //  计算当前柱子对应的最大宽度的矩形面积，并及时更新最大值
                max = Math.max(max, minHeight*(i-j+1))
            }
        }
    }
    // 返回结果
    return max
  };
  