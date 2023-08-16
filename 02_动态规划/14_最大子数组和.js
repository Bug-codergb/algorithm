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
let nums = [999,-1,-2,-3,4,5];
console.log(maxSubArray(nums));