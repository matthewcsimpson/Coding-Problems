function isValidSudokuTwo(board: string[][]): boolean {
  const numCells = board.length * board[0].length;

  const rows = new Map<number, Set<number>>();
  const cols = new Map<number, Set<number>>();
  const boxes = new Map<number, Set<number>>();

  for (let i = 0; i < numCells; i++) {
    // since we're starting with a predefined number and iterating once, we need
    // to do some basic math to figure out the current positions & value
    const row = Math.floor(i / 9);
    const col = i % 9;
    const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
    const current = Number(board[row][col]);

    // If the current value isn't a number, skip it.
    if (isNaN(current)) {
      continue;
    }

    // If the sets for the curren rows, cols, & boxes are not initialized, initialize them.
    if (!rows.has(row)) {
      rows.set(row, new Set<number>());
    }
    if (!cols.has(col)) {
      cols.set(col, new Set<number>());
    }
    if (!boxes.has(box)) {
      boxes.set(box, new Set<number>());
    }

    // If the current value already exists in a row, col, or box,
    // then the sudoku is invalid, return false.
    if (rows.get(row)?.has(current)) {
      return false;
    }
    if (cols.get(col)?.has(current)) {
      return false;
    }
    if (boxes.get(box)?.has(current)) {
      return false;
    }

    // Add the current value to the row, col, and box sets.
    rows.get(row)?.add(current);
    cols.get(col)?.add(current);
    boxes.get(box)?.add(current);
  }

  // If we get to this point, then the sudoku must be valid.
  return true;
}

export default isValidSudokuTwo;
