var arrangeCoins = function (n) {
  let sum = 0, sumStr = 0,i=1;
  while (sum < n) {
    sum += i;
    console.log(n,sum,i)
    if (n - sum >= 0) {
      sumStr += 1; 
    }
    if (sum > n) {
      break;
    }
    i++;
  }
  
  return sumStr;
};
console.log(arrangeCoins(8));
/**
 * 1
 * 1 1
 * 1 1 1
 * 1 1 1 1
 * 1 1 1 1 1
 * 1 1 1 1 1 1
 */