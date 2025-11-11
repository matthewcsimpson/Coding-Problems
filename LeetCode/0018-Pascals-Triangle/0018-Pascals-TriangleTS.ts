const generatePascalsTriangleTS = (numRows: number): number[][] => {
  // Initialize triangle with the first row containing only 1
  const triangle: number[][] = [[1]];

  // Loop through each row starting from the second row (index 1)
  for (let i = 1; i < numRows; i++) {
    // Get reference to the previous row for calculations
    const prevRow = triangle[i - 1];
    // Start new row with 1 (leftmost element is always 1)
    const newRow = [1];

    // Calculate middle elements by summing adjacent elements from previous row
    for (let j = 1; j < i; j++) {
      // Add sum of two adjacent elements from previous row
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    // Add 1 to end of row (rightmost element is always 1)
    newRow.push(1);
    // Add completed row to triangle
    triangle.push(newRow);
  }

  // Return the complete Pascal's triangle
  return triangle;
};

export default generatePascalsTriangleTS;
