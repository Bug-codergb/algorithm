var trailingZeroes = function(n) {
  let ret = 0;
  for (let i = 5; i <= n; i++){
    if (i % 5 == 0) {
      ret++
    }
  }
  return ret;
};
console.log(trailingZeroes(6))