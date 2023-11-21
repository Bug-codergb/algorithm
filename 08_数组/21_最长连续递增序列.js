var findLengthOfLCIS = function(nums) {
  let maxLen = 0;
  let index = 0;
  while (index < nums.length) {
    let right = index + 1;
    let temp = 1;
    while (right<nums.length && nums[right] > nums[right-1]) {
      right++;
      temp++;
    }
    
    if (temp > maxLen) {
      maxLen = temp;
      index = right;
    } else {
      index = right;
    }
  }
  return maxLen
};
let nums = [1, 3, 5, 4, 7];
console.log(findLengthOfLCIS(nums));