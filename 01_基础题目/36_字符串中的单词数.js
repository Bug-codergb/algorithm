var countSegments = function (s) {
  s = s.trim();
  if(!s){
      return 0
  }
  s = s.split(/[\s]+/);
  console.log(s)
  return s.length;
};
let s = "Of     all the gin joints in all the towns in all the   world";
console.log(countSegments(s))