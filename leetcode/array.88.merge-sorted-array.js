/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, cur = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i < 0) nums1[cur--] = nums2[j--]
    else if (j < 0) nums1[cur--] = nums1[i--]
    else if (nums1[i] > nums2[j]) nums1[cur--] = nums1[i--]
    else nums1[cur--] = nums2[j--]
  }
};
