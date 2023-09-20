var permuteUnique = function(nums) {
  let result = [], path = [];
  nums.sort((a, b) => a - b);
  backtracking(0,[]);
  function backtracking(startIndex,visited) {
    if (path.length === nums.length) {
      result.push(path.slice());
    } else if (path.length > nums.length) {
      return;
    }
    for (let i = 0; i < nums.length; i++){
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i-1]) {
        continue;
      }
      if (visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      backtracking(startIndex, visited);
      visited[i] = false;
      path.pop();
    }
  }
  return result;
};
let nums = [1, 1, 2];
console.log(permuteUnique(nums));