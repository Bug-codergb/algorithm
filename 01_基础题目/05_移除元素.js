var removeElement = function(nums, val) {
  let slowIndex = 0, fastIndex = 0,n=nums.length;
  while (fastIndex < n) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  while (slowIndex < n) {
    nums.pop();
    slowIndex++
  }
  return nums
};
let nums = [3, 2, 2, 3, 1, 2, 3, 3, 4, 5, 3, 4, 1], val = 3;
console.log(removeElement(nums, val));