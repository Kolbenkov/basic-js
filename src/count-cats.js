
module.exports = function countCats(matrix) {
  let n = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let m = 0; m < matrix[i].length; m++)
    if (matrix[i][m] == '^^') n++;
  }
  return n
};
