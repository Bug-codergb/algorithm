var letterCombinations = function(digits) {
  if (!digits || digits===1) {
    return []
  }
  let map = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ['7', "pqrs"],
    ["8", "tuv"],
    ["9","wxyz"]
  ])
  const str = digits.toString();
  let arr = [],path=[];
  for (let item of str) {
    arr.push(map.get(item));
  }
  let res = [], len = arr.length;
  backtracking(0, path);
  function backtracking(startIndex,path) {
    if (path.length === len) {
      res.push(path.slice().join(""));
      return;
    } else if (path.length > len) {
      return;
    }
    const source = arr[startIndex];
    for (let i = 0; i < source.length; i++){
      const str = source.charAt(i);
      path.push(str);
      backtracking(startIndex + 1, path);
      path.pop();
    }
  }
  return res;
};
console.log(letterCombinations(23))