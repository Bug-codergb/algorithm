var subsets = function(nums) {
  let path = [], result = [];

  backtracking(0);
  function backtracking(startIndex) {
    if (path.length > nums.length) {
      return;
    } else {
      result.push(path.slice());
    }
    for (let i = startIndex; i < nums.length; i++){
      const item = nums[i];
      path.push(item);
      backtracking(i + 1);
      path.pop();
    }
  }
  return result;
};
let nums = [1, 2, 3];
console.log(subsets(nums));