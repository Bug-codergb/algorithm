var isSubsequence = function(s, t) {
  const n = s.length;
  let findCount = 0;
  let index = 0;
  for (let i = 0; i < n; i++){
    const str = s.charAt(i);
    const findIndex = t.indexOf(str, index);
    if (findIndex !== -1) {
      index = findIndex+1;
      findCount++;
    } else {
      return false;
    }
  }
  return findCount === s.length;
};
const s = "aaaaaa", t = "bbaaaa"
console.log(isSubsequence(s, t));