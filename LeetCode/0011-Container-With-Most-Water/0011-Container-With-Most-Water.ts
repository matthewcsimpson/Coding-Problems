function maxAreaTS(height: number[]): number {
  let maxarea = 0;

  let left = 0,
    right = height.length - 1;

  while (left < right) {
    let current = Math.min(height[left], height[right]) * (right - left);
    maxarea = maxarea > current ? maxarea : current;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxarea;
}

export default maxAreaTS