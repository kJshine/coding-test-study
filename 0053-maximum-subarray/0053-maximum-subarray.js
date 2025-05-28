/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let home = nums[0];
    let observer = nums[0];

    for (let i = 1; i < nums.length; i++) {
        observer = Math.max(observer + nums[i], nums[i]);
        home = Math.max(home, observer);
    }

    return home;
};