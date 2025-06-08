/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    // 브루트 포스
    // let answer = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (Math.abs(nums[i] - nums[j]) === k) answer++;
    //     }
    // }

    // return answer;

    // 해시맵
    const map = new Map();
    let count = 0;

    for (const num of nums) {
        count += (map.get(num - k) || 0) + (map.get(num + k) || 0);
        map.set(num, (map.get(num) || 0) + 1);
    }

    return count;
};