var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let i = 0;
  while (i < nums.length-1) {
    if (nums[i] === nums[i + 1]) {
      i += 2;
      continue;
    }
    return nums[i]
  }
  return nums[i]
};
let nums = [4, 1, 2,4,3, 1, 2];
console.log(singleNumber(nums));