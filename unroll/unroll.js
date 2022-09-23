// run a array or arrays through this function and it should return a single array
// traversing in a clockwise direction.
// example:
// unroll([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]) => [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]

function unroll(squareArray) {
  let result = [];
  let rowStart = 0;
  let rowEnd = squareArray.length - 1;
  let colStart = 0;
  let colEnd = squareArray.length - 1;
  if (squareArray.length === 1) {
    return squareArray[0];
  }
  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      result.push(squareArray[rowStart][i]);
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(squareArray[i][colEnd]);
    }
    colEnd--;
    for (let i = colEnd; i >= colStart; i--) {
      result.push(squareArray[rowEnd][i]);
    }
    rowEnd--;
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(squareArray[i][colStart]);
    }
    colStart++;
  }
  return result;
}

module.exports = unroll;
