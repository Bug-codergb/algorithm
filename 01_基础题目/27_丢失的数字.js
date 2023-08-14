var missingNumber = function (nums) {
  if (nums.length < 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  if (nums[0] !== 0) {
    return 0
  }
  
  for (let i = 0; i < nums.length - 1; i++){
  
    if (nums[i] - nums[i + 1] !== -1) {
      return nums[i]+1
    }  
  }
  return nums[nums.length - 1] + 1;
};
let nums = [0,1]
console.log(missingNumber(nums));