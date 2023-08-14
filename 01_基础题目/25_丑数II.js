function isUgly(n) {
  if (n <= 0) {
    return false;
  }
  let a = [2, 3, 5];
  for (let item of a) {
    while (n%item===0) {
      n = n / item;
    }
  }
  return n === 1;
}
var nthUglyNumber = function (n) {
  let index = 0;
  let num = 1;
  while (true) {
    if (isUgly(num)) {
      index++;
      if (index === n) {
        return num;
      }
    }
    num++;
  }
};
let n = 4;
console.log(nthUglyNumber(n));