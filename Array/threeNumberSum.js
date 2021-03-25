const _nums = [-1, 0, 1, 2, -1,-1, -4,2,2,-1,-1];

const threeNumberSum = (nums, target) => {
    const result = [];
    nums.sort((a, b) => a - b);
    let m = 0;
    let v;
    while (m <= 3) {
        if (nums[m] === v) {
            m++;
            continue;
        }
        v = nums[m];
        const diff = target - v;
        let l = m + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[r] === nums[r + 1]) {
                r--;
            } else if (l - 1 !== m && nums[l] === nums[l - 1]) {
                l++;
            } else {
                const sum = nums[l] + nums[r];
                if (sum > diff) {
                    r--;
                } else if (sum < diff) {
                    l++;
                } else {
                    result.push([nums[m], nums[l], nums[r]]);
                    l++;
                    r--;
                }
            }
        }
        m++;
    }
    return result;
}


const threeSum = function(nums) {
    // 用于存放结果数组
    let res = [] 
    // 给 nums 排序
    nums = nums.sort((a,b)=>{
        return a-b
    })
    // 缓存数组长度
    const len = nums.length
    // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
    for(let i=0;i<len-2;i++) {
        // 左指针 j
        let j=i+1 
        // 右指针k
        let k=len-1   
        // 如果遇到重复的数字，则跳过
        if(i>0&&nums[i]===nums[i-1]) {
            continue
        }
        while(j<k) {
            // 三数之和小于0，左指针前进
            if(nums[i]+nums[j]+nums[k]<0){
                j++
               // 处理左指针元素重复的情况
               while(j<k&&nums[j]===nums[j-1]) {
                    j++
                }
            } else if(nums[i]+nums[j]+nums[k]>0){
                // 三数之和大于0，右指针后退
                k--
               
               // 处理右指针元素重复的情况
               while(j<k&&nums[k]===nums[k+1]) {
                    k--
                }
            } else {
                // 得到目标数字组合，推入结果数组
                res.push([nums[i],nums[j],nums[k]])
                
                // 左右指针一起前进
                j++  
                k--
               
                // 若左指针元素重复，跳过
                while(j<k&&nums[j]===nums[j-1]) {
                    j++
                }  
               
               // 若右指针元素重复，跳过
               while(j<k&&nums[k]===nums[k+1]) {
                    k--
                }
            }
        }
    }
    
    // 返回结果数组
    return res
};

console.log(threeNumberSum(_nums, 0));
console.log(threeSum(_nums, 0));