var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 1;
  for (let i = 3; i <= n; i++){
    for (let j = 1; j < i; j++){
      dp[i] = Math.max(Math.max(j*(i-j),j*dp[i-j]),dp[i])
    }
  }
  return dp[n];
};
let n = 10;
console.log(integerBreak(n));
//WAIT