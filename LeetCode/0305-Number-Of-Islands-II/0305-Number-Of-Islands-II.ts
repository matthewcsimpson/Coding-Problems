const numIslands2 = (m: number, n: number, positions: number[][]): number[] => {
  const ocean = Array(m)
    .fill(0)
    .map((row) => Array(n).fill(0));

  const count: number[] = [];

  const posLength = positions.length;

  for (let i = 0; i < posLength; i++) {
    const [row, col] = positions[i];
    ocean[row][col] = 1;
    count[i] = countEm(ocean);
  }

  return count;
};

const countEm = (ocean: number[][]): number => {
  const oceanCopy = ocean.map((row) => row.map((col) => col));
  let count = 0;

  for (let row = 0; row < oceanCopy.length; row++) {
    for (let col = 0; col < oceanCopy[row].length; col++) {
      if (oceanCopy[row][col] === 1) {
        count++;

        // remove(oceanCopy, row, col);
      }
    }
  }

  return count;
};

const remove = (grid: number[][], row: number, col: number): void => {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[row].length ||
    grid[row][col] === 0
  ) {
    return;
  }

  grid[row][col] = 0;
  remove(grid, row - 1, col);
  remove(grid, row + 1, col);
  remove(grid, row, col - 1);
  remove(grid, row, col + 1);
};

console.log(
  // [1,2,2,2,2,2,2,1]
  numIslands2(3, 3, [
    [0, 0],
    [2, 0],
    [0, 1],
    [2, 1],
    [0, 2],
    [2, 2],
    [0, 1],
    [1, 2],
  ])
);

console.log(
  // 1,1
  numIslands2(1, 2, [
    [0, 1],
    [0, 0],
  ])
);

console.log(
  //1,1,2,3
  numIslands2(3, 3, [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ])
);

console.log(
  // 1,2,1
  numIslands2(2, 2, [
    [0, 0],
    [1, 1],
    [0, 1],
  ])
);
