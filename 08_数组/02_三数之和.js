var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let res=[]
  for (let i = 0; i < nums.length-2; i++){
    let item = nums[i];
    let target = 0 - item;
    let leftIndex = i + 1, rightIndex = nums.length - 1;
    if (i>0&&nums[i] === nums[i - 1]) {
      continue;
    }
    while (leftIndex < rightIndex) {
      if (nums[rightIndex] === nums[rightIndex + 1]) {
        rightIndex--;
        continue;
      }
      if (leftIndex > i + 1 && nums[leftIndex] === nums[leftIndex - 1]) {
        leftIndex++
        continue;
      }
      if (nums[leftIndex] + nums[rightIndex] < target) {
        leftIndex++;
        continue;
      }
      if (nums[leftIndex] + nums[rightIndex] > target) {
        rightIndex--;
        continue
      }
      if (nums[leftIndex] + nums[rightIndex] === target) {
        res.push([item, nums[leftIndex], nums[rightIndex]]);
        leftIndex++;
        rightIndex--;
      }
    }
  }
  return res;
};
let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))