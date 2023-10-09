var minimumTotal = function(triangle) {
  let dp = [];
  dp[0] = triangle[0][0];
  dp[1] = Math.max(dp[0] + triangle[1][0], dp[0] + triangle[1][1]);
  for (let i = 2; i < triangle.length; i++){
    
  }
};
let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));