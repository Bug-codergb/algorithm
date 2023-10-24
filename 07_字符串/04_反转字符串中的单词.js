var reverseWords = function(s) {
  if (s.trim().length === 0) {
    return ""
  } else {
    s = s.trim().replace(/\s+/g, " ");
    let res = "";
    let word = "";
    
    for (let i = 0; i < s.length; i++){
      if (s.charAt(i) !== " ") {
        word += s.charAt(i);
      } else if(s.charAt(i)===" "){
        res = `${word} ${res}`;
        word = "";
      }if(i === s.length-1) {
        res = `${word} ${res}`;
      } 
    }
    return res.trim();
  }
};
let s = "the sky is   blue  ";
console.log(reverseWords(s));