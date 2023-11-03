var islandPerimeter = function(grid) {
  let n = grid.length, m = grid[0].length;
  let ret = 0;
  for (let i = 0; i < n ; i++){
    for (let j = 0; j < m ; j++){
      if (grid[i][j] === 1) {
        if (i-1<0||grid[i-1][j] !== 1) {
          ret++;
        }
        if (j-1<0 || grid[i][j - 1] !== 1) {
          ret++;
        }
        if (i+1>=n||grid[i+1][j] !== 1) {
          ret++;
        }
        if (j+1>=m || grid[i][j + 1] !== 1) {
          ret++;
        }
      }
    }
  }

  return ret;
};
let grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
console.log(islandPerimeter(grid));