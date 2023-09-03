var combinationSum3 = function(k, n) {
  let res = [], path = [];
  backtracking(k, n, 1, 0);
  function backtracking(k, n, startIndex, sum) {
    if (path.length > k) {
      return;
    }
    if (sum === n && path.length === k) {
      res.push(path.slice());
      return;
    }
    for (let i = startIndex; i <= 9; i++){
      sum += i;
      path.push(i);
      backtracking(k, n, i + 1, sum);
      sum -= i;
      path.pop();
    }
  }
  return res;
};
let k = 3, n = 9;
console.log(combinationSum3(k,n));