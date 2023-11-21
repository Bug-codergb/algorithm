var licenseKeyFormatting = function(s, k) {
  s = s.replace(/-/g, "");
  let index = s.length - 1; let ret = "";
  let count = 0;
  for (let i = index; i >= 0; i--){
    count++;
    ret = `${s.charAt(i).toLocaleUpperCase()}${ret}`;
    if (count === k) {
      ret = `-${ret}`;
      count = 0;
    }
  }

  if (ret.charAt(0) === "-") {
    return ret.substring(1);
  }
  return ret;
};
const S = "5F3Z-2e-9-w", k = 4
console.log(licenseKeyFormatting(S,k));