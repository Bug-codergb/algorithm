var majorityElement = function (nums) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++){
    m.set(nums[i],(m.get(nums[i])||0)+1)
  }
  let res;
  m.forEach((value, key) => {
    if (value > nums.length / 2) {
      res = key;
    }
  })
  return res;
};
console.log(majorityElement([2,2,1,1,1,2,2]));