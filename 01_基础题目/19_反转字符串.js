var reverseString = function(s) {
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++){
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
  return s;
};
let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));