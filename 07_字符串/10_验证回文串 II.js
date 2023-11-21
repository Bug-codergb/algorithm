function judgeHuiwen(s,isDelete) {
  let left = 0, right = s.length - 1;
  let flag = isDelete;
  while (left < right && s[left] === s[right]) {
    left++;
    right--;
    if (s[left] !== s[right] && flag) {
      return judgeHuiwen(s.slice(left+1,right+1),false) || judgeHuiwen(s.slice(left,right),false);
    }
  }
  if (s[left] === s[right]) {
    return true;
  }
  return false;
}
console.log(judgeHuiwen("aba"))
var validPalindrome = function (s) {
  let left = 0, right = s.length - 1;
  if (s[left] === s[right]) {
    return judgeHuiwen(s,true);
  } else {
    return judgeHuiwen(s.substring(1),false) || judgeHuiwen(s.substring(0,s.length - 1),false);
  }
};
console.log(validPalindrome("cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupucu"))