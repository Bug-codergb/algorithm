var search = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
    map.set(nums[i],i);
  }
  let j = 0;
  for (let i = 0; i < nums.length; i++){
    j = i + 1;
    if (nums[j] < nums[i]) {  
      break;
    }
  }
  nums = nums.slice(j).concat(nums.slice(0, j));
  console.log(nums)
  let left = 0, right = nums.length - 1;
  let res;
  while (left <= right) {
    let mid = Math.floor(left, right);
    if (target < nums[mid]) {
      right = mid-1;
    }else if (target > nums[mid]) {
      left = mid+1;
    } else {
      res = nums[mid]
      break;
    }
  }
  if (res !== undefined) {
    return map.get(res);
  } else {
    return -1
  }
};
let nums = [4,5,6,7,0,1,2], target = 3
console.log(search(nums,target));