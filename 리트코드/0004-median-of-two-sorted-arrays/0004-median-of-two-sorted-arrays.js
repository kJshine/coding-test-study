/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(nums2);
    const sorted = merged.sort((a, b) => a - b);
    
    return sorted.length % 2 === 1 ? sorted[(sorted.length - 1) / 2] : ((sorted[(sorted.length / 2) - 1] + sorted[sorted.length / 2]) / 2);
};