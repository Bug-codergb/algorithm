var isPerfectSquare = function(num) {
  if (num === 1) {
    return 1;
  }
  let half = Math.floor(num / 2);
  console.log(half)
  for (let i = 2; i <= half; i++){
    if (i * i === num) {
      return true;
    }
    if (i * i > num) {
      return false;
    }
  }
  return false;
};
let num = 5 ;
console.log(isPerfectSquare(num));