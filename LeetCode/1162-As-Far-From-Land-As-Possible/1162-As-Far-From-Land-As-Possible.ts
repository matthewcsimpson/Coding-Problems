const maxDistance = (grid: number[][]): number => {
  // the grid is is always n x n, so we just need the one length.
  let len = grid.length;
  // new array to hold arrays.
  let q: number[][] = [];
  // loop to populate the array with coords and count values.
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (grid[i][j] === 1) {
        q.push([i, j, 0]);
      }
    }
  }
  // new variable to check the max dist.
  let max = 0;
  // loop over out grid of coords and values.
  while (q.length > 0) {
    // break down the values into individual variables.
    const check = q.shift();
    const row = check![0];
    const col = check![1];
    const count = check![2];
    // what's higher, the current max or the current count?
    max = Math.max(max, count);
    // an array of he various directions the function will look.
    let directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];
    // loop those directions.
    for (let dir of directions) {
      // destructiring the current direction.
      let [dx, dy] = dir;
      // do the the math.
      let x = row + dx;
      let y = col + dy;
      // ignore the values outside the grid.
      if (x < 0 || y < 0 || x >= len || y >= len) {
        continue;
      }
      // ignore the land
      if (grid[x][y] == 1) {
        continue;
      }
      // iterate the count te the current place.
      q.push([x, y, count + 1]);
      //   reset the current place to be ignored next time.
      grid[x][y] = 1;
    }
  }
  // if the max is 0, return -1.  otherwise return the max.
  return max == 0 ? -1 : max;
};

export default maxDistance;
