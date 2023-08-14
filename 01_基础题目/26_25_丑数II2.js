/**
 * 
 * @param {*} n
 * 由于dp[1] = 1;
 * 为每一个丑数因子设置一个倍数 刚开始时为1，由于dp[1]=1,那么下一个数字一定是2，3，5的倍数，且取其中最小
 * 
 */
var nthUglyNumber = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;

  let p2 = 1, p3 = 1, p5 = 1;
  for (let i = 2; i <= n; i++){
    let num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
    dp[i] = Math.min(num2, num3, num5);
    if (dp[i] === num2) {
      p2++;
    }
    if (dp[i] === num3) {
      p3++
    }
    if (dp[i] === num5) {
      p5++;
    }
  }
  console.log(dp);
  return dp[n];
};
console.log(nthUglyNumber(10))
