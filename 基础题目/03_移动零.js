var moveZeroes = function (nums) {
  if (nums.length < 1) {
    return nums;
  }
  let n = nums.length;
  let fastIndex = 0, slowIndex = 0;
  while (fastIndex < n) {
    if (nums[fastIndex] !== 0) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  while (slowIndex < n) {
    nums[slowIndex] = 0;
    slowIndex++
  }
  return nums;
};
const nums = [0,1,0,1]
console.log(moveZeroes(nums));