const dfs = (board, x, y) => {
  const n = board.length;
  const m = board[0].length;
  if (x < 0 || x >= n || y < 0 || y >= m || board[x][y]!=='O') {
    return;
  }
  board[x][y] = "a";
  dfs(board,x-1,y);
  dfs(board,x+1,y);
  dfs(board,x,y-1);
  dfs(board,x,y+1);
}
var solve = function (board) {
  //首先获取到矩阵的长宽
  const n = board.length, m = board[0].length;

  //接下来要做的就是将举证的边缘节点进行深搜，和边缘节点相连的节点都会被搜到，
  //如果这个节点是o，那么将其替换为a,
  for (let j = 0; j < m; j++){//替换矩阵的第一行和最后一行
    dfs(board, 0, j);
    dfs(board,n-1,j);
  }

  for (let i = 0; i < n; i++){//替换举证的第一列和最后一列
    dfs(board, i, 0);
    dfs(board,i,m-1);
  }
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (board[i][j] === "a") {
        board[i][j] = "O";
      }else if (board[i][j] === "O") {
        board[i][j] = "X"
      }
    }
  } 
};
let board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
solve(board);