function dfs(board, i, j,word,temp) {
  let n = board.length, m = board[0].length;
  if (i < 0 || j < 0 || i >= n || j >= m || board[i][i]==='-1') {
    return '';
  }
  
  board[i][j] = '-1';
  dfs(board, i - 1, j, word, temp);
  dfs(board, i + 1, j,word,temp);
  dfs(board, i, j-1,word,temp);
  dfs(board, i, j + 1, word,temp);
 
}
var exist = function (board, word) {
  let n = board.length;
  let m = board[0].length;
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      if (board[i][j] === word[0]) {
        let res = dfs(board, i, j, word, '');
      }
    }
  }
  return false;
};
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";
console.log(exist(board, word));