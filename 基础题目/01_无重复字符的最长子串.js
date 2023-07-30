var lengthOfLongestSubstring = function (s) {
  if (!s) {
    return 0;
  }
  let n = s.length - 1;
  let i = 0;
  let maxlen = 0;
  let keyIndex = {};
  let len = 0;
  while (i <= n) {
    console.log(i)
    let j = i;
    let endIndex = keyIndex[s.charAt(j)];
    
    keyIndex[s.charAt(j)] = j;
    while (
      j + 1 <= n &&
      (
        (keyIndex[s.charAt(j + 1)]===undefined) ||
        (keyIndex[s.charAt(j + 1)] && endIndex !== undefined && keyIndex[s.charAt(j + 1)] <= endIndex)
      )) {
      keyIndex[s.charAt(j + 1)] = j;
      j++;
    }
    console.log(len)
    len = len+j - i + 1;  
    if (len > maxlen) {
      maxlen = len;
    }
    console.log(i,j,keyIndex,len)
    if (n - i + 1 <= maxlen) {
      return maxlen;
    }
    //keyIndex[s.charAt(i)] = false;
    if (j > i) i = j+1;
    else {
      i++;
    }

    len = len - keyIndex[s.charAt(i)] + 1;
  }
  return maxlen;
};
let s = "abcabcbb";

let res= (lengthOfLongestSubstring(s));
console.log("result",res)