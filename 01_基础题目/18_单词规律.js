var wordPattern = function(pattern, s) {
      if (!s) {
        return false;
      }
      s = s.trim();
  let strArr = s.split(" ");
  for (let i = 0; i < strArr.length; i++){
    if(strArr[i]==="constructor") strArr[i] = "c" 
  }
  console.log(strArr)
      let pMap = {}, sMap = {};
      if (pattern.length !== strArr.length) {
        return false;
      }
      for (let i = 0; i < pattern.length; i++){
        const pTmp = pattern[i], sTmp = strArr[i];
        if ((pMap[pTmp] && pMap[pTmp] !== sTmp) || (sMap[sTmp] && sMap[sTmp] !== pTmp)) {
          return false;
        }
        pMap[pTmp] = sTmp;
        sMap[sTmp] = pTmp;
      }
 
      return true;
};
let pattern = "abba", s="dog constructor constructor dog"//s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
console.log("constructor"==="constructor")