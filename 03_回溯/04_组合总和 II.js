var combinationSum2 = function(candidates, target) {
  let res = [], path = [];
  candidates.sort((a, b) => a - b);
  console.log(candidates)
  let visited = new Array(candidates.length).fill(false);
  backtracking(candidates,target,path,0,0,visited);
  function backtracking(candidates,target,path,sum,startIndex,visited) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push(path.slice())
    }
    for (let i = startIndex; i < candidates.length; i++){
      const item = candidates[i];
      if (i > 0 && item === candidates[i-1] && visited[i - 1]===false) {
        continue;
      }
     
      sum += item;
      path.push(item);
      visited[i] = true;
      backtracking(candidates, target, path, sum, i + 1,visited);
      visited[i] = false;
      sum -= item;
      path.pop();

    }
  }
  return res;
};
let candidates = [10, 1, 2, 7, 6, 1, 5], target = 8;
console.log(combinationSum2(candidates,target));