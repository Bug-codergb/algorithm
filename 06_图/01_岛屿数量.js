var numIslands = function(grid) {
  const n = grid.length, m = grid[0].length;
  function dfs(grid,i,j) {
    if (i < 0 || j < 0 || i >= n | j >= m || grid[i][j]==="0") {
      return;
    }
    grid[i][j] = "0";//搜索过的节点置为0，他之前为1
    dfs(grid,i-1,j);
    dfs(grid,i+1,j);
    dfs(grid,i,j-1);
    dfs(grid,i,j+1);
  }
  let res = 0;
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (grid[i][j] === "1") {
        res++;
        dfs(grid,i,j);
      }
    }
  }
  return res;
};
let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(grid));