/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isOdd = totalLength % 2 === 1;
    const targetIndex = Math.floor(totalLength / 2);

    let prev = 0, current = 0, i = 0, j = 0;
    for (let k = 0; k <= targetIndex; k++) {
        prev = current;
        if (i < nums1.length && (j >= nums2.length || nums1[i] <= nums2[j])) {
            current = nums1[i++];
        } else {
            current = nums2[j++];
        }
    }

    return isOdd ? current : (prev + current) / 2;
};