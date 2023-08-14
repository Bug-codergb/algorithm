var addStrings = function(num1, num2) {
  if (num1.length > num2.length) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let diff = Math.abs(num1.length - num2.length);
  while (diff--) {
    num1 = `0` + num1;
  }
  
  let index = num1.length - 1, remainder = 0;
  let res = "";
  while (index >=0) {
    let sum = Number(num1[index]) + Number(num2[index]) + remainder;
    if (sum >= 10) {
      remainder = 1;
      sum -= 10;
    } else {
      remainder=0
    }
    res = `${sum}${res}`;
    index--;
  }
  if (remainder !== 0) {
    res=`${1}${res}`
  }
  
  return res;
};
let num1 = "99999", num2 = "9999";
/*
  9 9 9 9 9
  0 0 0 7 7
*/
console.log(addStrings(num1, num2));