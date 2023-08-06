var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++){
    let charS = s.charAt(i);
    let charT = t.charAt(i);
    if (sMap[charS] !== charT || tMap[charT]!== charS) {
      return false;
    }
    sMap[charS] = charT;
    tMap[charT] = charS;
  }
 
  return true;
};
let s = "egg", t = "add";
isIsomorphic(s, t);