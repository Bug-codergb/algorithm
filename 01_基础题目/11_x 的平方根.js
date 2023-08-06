var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let half = Math.floor(x / 2);
  if (x < 6) {
    return half;
  }
  for (let i = 1; i < half; i++){
    if (i * i === x) return x;
    if ((i + 1) * (i + 1) === x) return i + 1;
    if (i * i <= x && x <= (i + 1) * (i + 1)) {
      return i;
    }
  }
};
console.log(mySqrt(3));