var plusOne = function(digits) {
  for (let i = digits.length-1; i>=0;i--) {
    if(i===digits.length-1)digits[i] = digits[i] + 1;
    if (digits[i] >= 10) {
      if (digits[i - 1]!==undefined) {
        digits[i - 1] += 1;
        digits[i] -= 10;
      } else {
        digits[i] -= 10;
        digits.unshift(1);
        return digits;
      }
    } else {
      break;
    }
  }
  return digits;
};
let digits = [0];
console.log(plusOne(digits));