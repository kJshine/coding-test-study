/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let index = 0;

    while (index < nums.length - 1) {
        const jump = nums[index];
        let maxJump = 0;
        let nextIndex = index;

        // 마지막 인덱스로 갈 수 있을 때
        if (index + jump >= nums.length - 1) return true;

        // 더 이상 점프를 하지 못할 때
        if (jump === 0) return false;

        for (let i = index + 1; i <= index + jump; i++) {
            const nextJump = i + nums[i];
            if (maxJump <= nextJump) {
                maxJump = nextJump;
                nextIndex = i;
            }
        }
        
        index = nextIndex;
    }

    return true;
};