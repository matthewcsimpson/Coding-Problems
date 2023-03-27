/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1.pop();
    nums1.unshift(nums2[i]);
  }
  nums1.sort((a, b) => {
    return a - b;
  });

}


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
