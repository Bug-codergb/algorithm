var longestCommonPrefix = function(strs) {
  let minLen = Number.MAX_VALUE;
  let minStr = "";
  for (let item of strs) {
    if (item.length < minLen) {
      minLen = item.length;
      minStr = item;
    }
  }
  let res = "";
  for (let i = 0; i < minStr.length; i++){
    const c = minStr[i];
    let flag = strs.every((item) => {
      return item[i] === c;
    })
    if (flag) {
      res += c;
    } else {
      break;
    }
  }
  return res;
};
let strs = ["cir","car"]
console.log(longestCommonPrefix(strs));