function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < board.length; row++) {
    let rowCheck: Record<number, boolean> = {};
    let colCheck: Record<number, boolean> = {};
    let boxCheck: Record<number, boolean> = {};

    for (let col = 0; col < board[row].length; col++) {
      let boxVal: string =
        board[3 * Math.floor(row / 3) + Math.floor(col / 3)][3 * (row % 3) + (col % 3)];
      let rowVal = board[row][col]
      let colVal = board[col][row]

      if (rowVal != ".") {
        if (rowCheck[rowVal]) {
          return false;
        }
        rowCheck[rowVal] = true;
      }

      if (colVal != ".") {
        if (colCheck[colVal]) {
          return false;
        }
        colCheck[colVal] = true;
      }

      if (boxVal != ".") {
        if (boxCheck[boxVal]) {
          return false;
        }
        boxCheck[boxVal] = true;
      }
    }
  }
  return true;
}

export default isValidSudoku;
