function testWeightBagProblem(weight,value,size) {
  const len = weight.length; // 物品的个数
  const dp = Array(len).fill().map(() => Array(size + 1).fill(0));
 
  // 初始化
    for(let j = weight[0]; j <= size; j++) {//本应该从0开始，但是由于j<weight[0]时，放不下
        dp[0][j] = value[0];
    }

    // weight 数组的长度len 就是物品个数
    for(let i = 1; i < len; i++) { // 遍历物品
        for(let j = 0; j <= size; j++) { // 遍历背包容量
            if(j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }

    console.table(dp)

    return dp[len - 1][size];
}