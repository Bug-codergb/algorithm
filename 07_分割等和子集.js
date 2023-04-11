var canPartition = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  })
  let sum = nums.reduce((prev, next) => {
    return prev + next;
  }, 0);
  if (sum % 2 !== 0) {
    return false;
  }else {
    let target = sum / 2;
    const len = nums.length;
   
    const dp = Array(len).fill().map(() => Array(len).fill(0));
    
    for (let j = nums[0]; j <=target; j++){
      dp[0][j] = nums[0];
    }
    for (let i = 1; i < nums.length; i++){
      for (let j = 0; j <= target; j++){
        if (j < nums[i]) dp[i][j] = dp[i - 1][j];
        else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
        }
      }
    }
    return dp[nums.length-1][target]===target;
  }
};
let nums = [1,2,3,5];
console.log(canPartition(nums));