var permute = function(nums) {
  let res = [], path = [];

  backtracking(0,[]);
  function backtracking(startIndex,visited) {
    if (path.length === nums.length) {
      res.push(path.slice());
    }
    if (path.length > nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++){
      if (visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      backtracking(0,visited);
      visited[i] = false;
      path.pop();
    }
  }
  return res;
};
let nums = [1, 2, 3];
console.log(permute(nums));