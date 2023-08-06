var firstUniqChar = function(s) {
  let m = new Map();
  let n = s.length;
  for (let i = 0; i < n; i++) {
    m.set(
      s.charAt(i),
      {
        count: (m.get(s.charAt(i)) ? m.get(s.charAt(i)).count : 0) + 1,
        index:i
      }
    )
  }
  let res=-1;
  m.forEach((value, key) => {
    if (value.count === 1 && res===-1) {
      res = value.index;
    }
  })
  return res;
};
let s = "aavv";
console.log(firstUniqChar(s));
