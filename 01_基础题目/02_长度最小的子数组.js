var minSubArrayLen = function(target, nums) {
  let n = nums.length;
  let sum = 0;
  let minLen = Number.MAX_VALUE;
  let startIndex = 0, endIndex = 0;
  while (endIndex < n) {
    sum += nums[endIndex];
    while (sum >= target) {
      sum -= nums[startIndex];
      minLen = Math.min(minLen, endIndex - startIndex + 1);
      startIndex++;
    }
    endIndex++;
  }
  if (minLen === Number.MAX_VALUE) {
    return 0;
  }
  return minLen;
};
let target = 15, nums = [1,2,3,4,5];
console.log(minSubArrayLen(target, nums));