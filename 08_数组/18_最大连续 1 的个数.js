var findMaxConsecutiveOnes = function(nums) {
  let index = 0;
  let maxLen = 0;
  while (index < nums.length) {
    let temp = 0;
    let j = index;
    while (nums[j] === 1 && j<nums.length) {
      temp++;
      j++
    }
    if (temp > maxLen) {
      maxLen = temp;
    }
    if (temp > 0) {
      index = j;
    } else {
      index++;
    }
  }
  return maxLen;
};
const nums = [1, 1, 0,0,0,1,1,1,1,1,0,0,0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));