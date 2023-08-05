var searchInsert = function(nums, target) {
  let n = nums.length, i = 0;
  if (target > nums[nums.length - 1]) {
    return n;
  }
  while (i<n) {
    if (target <= nums[i]) {
      return i;
    }
    i++;
  }
};
let nums = [1, 3, 3, 3, 5, 6], target = -1;
console.log(searchInsert(nums, target));