/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 브루트 포스
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) return [i, j];
    //     }
    // }

    // 해쉬 맵
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const item = target - nums[i];

        if (map.has(item)) {
            return [map.get(item), i];
        }

        map.set(nums[i], i);
    }
};