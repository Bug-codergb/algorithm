var generate = function(rowIndex) {
  let res = [[1]];
  for (let i = 1; i <= rowIndex; i++){
    let temp = [];
    for (let j = 0; j <= i; j++){
      if (j === 0) {
        temp[j] = 1;
      }else if (j > 0) {
        temp[j] = (res[i - 1][j] ?? 0) + (res[i - 1][j - 1] ?? 0);
      }
    }
    res.push(temp);
  }
  return res[rowIndex];
};
console.log(generate(5));