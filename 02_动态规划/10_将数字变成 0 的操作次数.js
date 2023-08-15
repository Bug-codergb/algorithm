var numberOfSteps = function(num) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= num; i++){
    if (i % 2 !== 0) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i / 2] + 1;
    }
  }
  return dp[num];
};
console.log(numberOfSteps(14))