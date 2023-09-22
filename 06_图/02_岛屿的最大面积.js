var maxAreaOfIsland = function(grid) {
  let n = grid.length, m = grid[0].length;
  let maxArea = 0;
  function dfs(grid, i, j, area) {
    
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === 0) {
      return 0;
    }
    grid[i][j] = 0;
    area += 1;
    let a = dfs(grid,i-1,j,0);
    let b = dfs(grid,i+1,j,0);
    let c = dfs(grid,i,j-1,0);
    let d = dfs(grid, i, j + 1,0);
    return a + b + c + d + area;
  }

  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (grid[i][j] === 1) {
        let area = dfs(grid, i, j, 0);
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }
  }
  return maxArea;
};
let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];
console.log(maxAreaOfIsland(grid));