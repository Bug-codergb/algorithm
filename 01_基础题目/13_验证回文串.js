var isPalindrome = function(s) {
  let exp = /[^a-zA-Z0-9]/g;
  let str = s.replace(exp, "");
  let startIndex = 0, endIndex = str.length - 1;
  console.log(str);
  while (
    startIndex <= endIndex &&
    (str.charAt(startIndex).toLowerCase() === str.charAt(endIndex).toLowerCase())
  ) {
    startIndex++;
    endIndex--;
  }
  
  if (str.charAt(startIndex).toLowerCase() === str.charAt(endIndex).toLowerCase()) {
    return true;
  }
  return false;
};
let s = "Damosel, a poem? A carol? Or a cameo pale? (So mad!)";
console.log(isPalindrome(s));