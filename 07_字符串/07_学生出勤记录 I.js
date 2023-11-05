var checkRecord = function(s) {
  let m = new Map();
  let maxL = 0
  for(let i=0;i<s.length;i++){
    m.set(s.charAt(i), (m.get(s.charAt(i)) || 0) + 1);
  }
  let i = 0;
  while (i < s.length) {
    let j = i;
    let len = 0;
    while (s.charAt(j) === "L") {
      len++;
      j++;
    }
    if (len > maxL) {
      maxL = len;
    }
    if (len > 0) {
      i = j;
    } else {
      i++;
    }
    
  }
  const countOfA = m.get("A");
  if (countOfA > 2 || maxL>=3) {
    return false;
  }
  return true;
};
console.log(checkRecord("PPALLLooLL"));