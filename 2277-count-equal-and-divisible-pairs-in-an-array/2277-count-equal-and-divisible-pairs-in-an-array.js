/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            for (const prevIndex of map.get(num)) {
                if ((prevIndex * i % k) === 0) count++;
            }
            map.get(num).push(i);
        } else {
            map.set(num, [i]);
        }
    }

    return count;
};

// 