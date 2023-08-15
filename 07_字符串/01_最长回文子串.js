var longestPalindrome = function (s) {
  if (!s) {
    return 0;
  }
  let res = 0;
  let str = "";
  for (let i = 0; i < s.length; i++){
    let leftIndex = i-1;
    let rightIndex = i + 1;
    let len = 1;
    while (leftIndex >= 0 && s[leftIndex] === s[i]) {
      leftIndex--;
      len += 1;
    }
    while (rightIndex < s.leftIndex && s[rightIndex] === s[i]) {
      rightIndex++;
      len+=1;
    }
    while (leftIndex >= 0 && rightIndex < s.length && s[leftIndex] === s[rightIndex]) {
      len += 2;
      leftIndex--;
      rightIndex++;
    }  
    if (len > res) {
      res = len;
      str = s.substr(leftIndex+1,len)
    }
  }
  return str;
};
let s = "babad";
console.log(longestPalindrome(s));