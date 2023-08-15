var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let dp = [];
  dp[0] = nums[1];
  dp[1] = Math.max(nums[2], nums[1]);
  for (let i = 2; i < nums.length; i++){
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i+1]);
  }
  let a = dp[nums.length - 2];
  dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length - 1; i++){
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  let b = dp[nums.length - 2];
  return Math.max(a,b)
};
let nums = [1];
console.log(rob(nums));