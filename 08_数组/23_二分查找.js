var search = function(nums, target) {
  let right = nums.length-1;
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target<nums[mid]) {
      right = mid-1;
    }
    if (target > nums[mid]) {
      left = mid+1;
    }
    if (target === nums[mid]) {
      return mid;
    }
  }
  return -1;
};
let nums = [-1, 0, 3, 5,7, 9, 12], target = 7;
console.log(search(nums,target))