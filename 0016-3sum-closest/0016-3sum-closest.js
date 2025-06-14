/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let answer = nums[0] + nums[1] + nums[2];
    nums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - answer)) {
                answer = sum;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return answer;
};