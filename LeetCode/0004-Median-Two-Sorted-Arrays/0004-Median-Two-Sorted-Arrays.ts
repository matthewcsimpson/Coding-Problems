function findMedianSortedArraysTS(nums1: number[], nums2: number[]): number {
  let allnums = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });

  if (allnums.length % 2 === 0) {
    return (allnums[allnums.length / 2] + allnums[allnums.length / 2 - 1]) / 2;
  } else {
    return allnums[Math.floor(allnums.length / 2)];
  }
}

export default findMedianSortedArraysTS;
