var permute = function(nums) {
  let result = [], path = [];
  backtracking(0,[]);
  function backtracking(startIndex, visited) {
    if (path.length === nums.length) {
      result.push(path.slice());
      return;
    } else if (path.length > nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      path.push(nums[i]);
      backtracking(startIndex, visited);//startIndex从头到尾都是0
      visited[i] = false;
      path.pop();
    }
  }
  return result;
};
let nums = [1, 2, 3];
console.log(permute(nums));