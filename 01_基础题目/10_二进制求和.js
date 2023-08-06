var addBinary = function(a, b) {
  if (b.length > a.length) {
    let temp = a;
    a = b;
    b = temp;
  }
  let n = a.length;
  let fill = a.length - b.length;
  let fillIndex = 0,fillStr="";
  while (fillIndex < fill) {
    fillStr += 0;
    fillIndex++;
  }
  b = fillStr + b;
  let enter = 0;
  let res = "";
  
  for (let i = n - 1; i >= 0; i--){
    if (a.charAt(i) !== undefined && b.charAt(i) !== undefined) {
      sum = `${Number(a.charAt(i)) + Number(b.charAt(i)) + enter}`;
      if (sum >1) {
        sum>=3 ? res += "1" : res+="0";
        enter = 1;
      } else {
        res += sum;
        enter = 0;
      }
    } else {
      res += a.charAt(i);
    }
  }
  if (enter > 0) {
    res+=`${enter}`
  }
  return res.split("").reverse().join("");
};
let a = "10", b = "11111";
console.log(addBinary(a, b))
/**
 * 111
 *  10 
 */