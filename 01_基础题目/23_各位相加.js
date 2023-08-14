var addDigits = function (num) {
  if (num < 10) {
    return num;
  }
  let sum = 0;
  num = num.toString();
  for (let i = 0; i < num.length; i++){
    sum += Number(num[i]);
  }
  if (sum < 10) {
    return sum;
  }
  return addDigits(Number(sum));
};
let num = 889;
console.log(addDigits(num));