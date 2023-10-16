var trailingZeroes = function(n) {//超出时间限制
  let res = 1n;
  for (let i = 1n; i <= n; i++) {
    res = res * i;
  }
  res = res.toString();
  let index = res.length - 1;
  let result = 0;
  if (res.length !== 0) {
    while (res.charAt(index) === '0' && index>=0) {
      result += 1;
      index--;
    }
  }
  return result;
};
trailingZeroes = function(n) {
  let count = 0;
  while (n !== 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count
};  
const num = 40;

function getTenCount(num) {
  if (num === 0) {
    return 1
  }
  let index = 1;
  while (num % Math.pow(10, index) === 0) {
    index++
  }
  return index-1;
}
console.log(trailingZeroes(num));