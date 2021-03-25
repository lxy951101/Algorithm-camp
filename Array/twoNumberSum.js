const _nums = [2, 7, 11, 15];
const _target = 9;

const twoNumberSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(_target - nums[i])) { // 存在
            return [map.get(_target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

console.log(twoNumberSum(_nums, _target));