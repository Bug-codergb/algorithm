var findErrorNums = function(nums) {
  let obj = {};
  let ret = [];
  for (item of nums) {
    obj[item] = (obj[item] ?? 0) + 1;
  }
  
  for (let i = 1; i <= nums.length; i++){
    if (!obj[i]) {
      ret[1] = i;
    }
    if (obj[i] === 2) {
      ret[0] = i
    }
  }
  return ret;
};
let nums = [3, 2, 3, 4, 6, 5]
console.log(findErrorNums(nums))