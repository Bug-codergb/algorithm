var checkPerfectNumber = function(num) {
  const half = Math.floor(Math.sqrt(num));
  let ret=[]
  for (let i = 1; i <= half; i++){
    if (num % i === 0) {
      ret.push(i, num / i);
    }
  }
  let sum = 0;
  for (let item of ret) {
    sum += item;
  }
  return num === sum - num;
};
let num = 28;
console.log(checkPerfectNumber(num));