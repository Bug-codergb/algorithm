var combinationSum = function(candidates, target) {
  let res = [], path = [];
  backtracking(candidates,target,0,0);
  function backtracking(candidates,target,sum,startIndex) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push(path.slice());
    }
    for (let i = startIndex; i < candidates.length; i++){
      let item = candidates[i];
      sum += item;
      path.push(item);
      backtracking(candidates, target, sum, i);
      sum -= item;
      path.pop();
    }
  }
  return res;
};
let candidates = [2, 3, 5], target = 8;
console.log(combinationSum(candidates,target));