function solution(nums) {
    const types = new Set(nums);
    return Math.min([...types].length, nums.length / 2);
}