var minCostClimbingStairs = function(cost) {
  let dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1]
  for (let i = 2; i < cost.length; i++){
    dp[i] = Math.min(dp[i-1]+cost[i],dp[i-2]+cost[i])
  }
  return Math.min(dp[cost.length-2],dp[cost.length-1])
};
let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost));