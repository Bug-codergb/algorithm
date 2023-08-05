/*
  dp[i] 到达下表i的位置所需要的花费为dp[i]
  dp[i-1] +cos[i-1];
  dp[i-2] + cos[i-2];

  dp[i] = Math.min(dp[i-1]+cos[i-1], dp[i-2]+cos[i-2])

  dp[0] = 0
  dp[1] = 0
*/
const minCostClimbingStairs=(cost)=>{
  let dp=[];
  dp[0]=0;
  dp[1]=0;
  for(let i=2;i<=cost.length;i++){
    dp[i] = Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2]);
  }
  console.log(dp);
  return dp[cost.length];
}
const cost = [1,100,1,1,1,100,1,1,100,1]
console.log(minCostClimbingStairs(cost));