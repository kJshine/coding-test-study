/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) return 0;

    let index = 0;
    let answer = 0;

    while (index < nums.length - 1) {
        const jump = nums[index];

        if (index + jump >= nums.length - 1) {
            answer++;
            return answer;
        }

        let maxReach = 0;
        let nextIndex = index + 1;

        for (let i = index + 1; i <= index + jump; i++) {
            if (i + nums[i] > maxReach) {
                maxReach = i + nums[i];
                nextIndex = i;
            }
        }

        index = nextIndex;
        answer++;
    }

    return answer;
};