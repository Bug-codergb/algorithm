var lengthOfLastWord = function(s) {
  if (!s) {
    return "";
  }
  let n = s.length - 1;
  while (n>=0 && s.charAt(n)===" ") {
    n--;
  }
  let end = n;
  while (n >= 0 && s.charAt(n) !== " ") {
    n--;
  }
  return end - n;
};
let s = "    ";
console.log(lengthOfLastWord(s));