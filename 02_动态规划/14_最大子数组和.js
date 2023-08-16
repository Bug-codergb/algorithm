var maxSubArray = function(nums) {
  let maxSum = -Number.MAX_VALUE;
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
    if (sum < nums[i]) {
      sum = nums[i]
    } 
    maxSum = Math.max(maxSum,sum)
    
  }
  return maxSum;
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));