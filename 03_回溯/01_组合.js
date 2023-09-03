var combine = function(n, k) {
  let res = [], path = [];
  backtracing(n,k,1);
  function backtracing(n,k,startIndex) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    if (path.length > k) {
      return;
    }
    for (let i = startIndex; i <= n; i++){
      path.push(i);
      backtracing(n,k,i+1);
      path.pop();
    }
  }
  return res;
};
let n = 4, k = 2;
console.log(combine(n, k));
let arr = [1, 2, 3, 4];