/**
 *   一直将2，3，5整除，直到为0
 *   如果n是凑数，则其一定由n个2，m个3，k个5相乘而得出
 */
var isUgly = function (n) {
  if (n <= 0) {
    return false;
  }
  let a = [2, 3, 5];
  for (let item of a) {
    while (n % item === 0) {
      n = n / item;
    }
  }
  return n === 1;
};
console.log(isUgly(14))