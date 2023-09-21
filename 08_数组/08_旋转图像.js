var rotate = function (matrix) {
  let n = matrix.length;
  let newMatrix = new Array(n).fill().map(item=>Array(n));
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      newMatrix[j][n-i-1] = matrix[i][j];
    }
  }
  return newMatrix;
};
let matrix  = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix));  
/**
 * 00 03
 * 01 13
 * 02 23
 * 03 33
 * 
 * 
 * 10 02
 * 11 12
 * 12 22
 * 
 */

/**
 * 00 -> 03
 * 03 -> 33
 * 33 -> 30
 * 30 -> 00
 * 
 * 01 -> 13
 * 13 -> 32
 * 32 -> 20
 * 20 -> 01
 * 
 * 
 */