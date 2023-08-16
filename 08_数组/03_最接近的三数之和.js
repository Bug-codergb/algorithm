var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let res = Number.MAX_VALUE;
  let result = 0;
  for (let i = 0; i < nums.length-2; i++){
    let item = nums[i];
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

      let sum = item + nums[leftIndex] + nums[rightIndex];
      const diff = Math.abs(sum - target);
      if (diff <= res) {
        res = diff;
        result = sum;
      }
      if (sum < target) {
        leftIndex++;
      } else {
        rightIndex--; 
      }
    }
  }
  return result;
};
let nums = [2, 1, 4,1], target = 7;
console.log(threeSumClosest(nums,target));