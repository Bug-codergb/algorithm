var convert = function (s, numRows) {
  if (numRows === 1 || s.length<=numRows) return s;
  let cell = numRows + numRows - 2;
  let cellList = [];
  for (let i = 0; i < s.length; i+=cell){
    cellList.push(s.substr(i,cell));
  }
  let res = [];
  for (let item of cellList) {
    let temp = [];
    temp.push(item[0]);
    for (let i = 1; i <= Math.floor(cell/2); i++){
      if (i !== Math.floor(cell/ 2)) temp.push(`${item[i]??''}${item[cell - i]??''}`);
      else {
        temp.push(item[i]);
      }
    }
    res.push(temp);
  }
  let resStr = "";
  let first = res.length !== 0 ? res[0].length : 0;
  for (let i = 0; i < first; i++){
    for (let item of res) {
      resStr+= item[i]??""
    }
  }
  return resStr;
};
let s = "ABCDE", numRows = 4;
console.log(convert(s, numRows));
/**
 * A
 * B
 * C  E
 * D
 */