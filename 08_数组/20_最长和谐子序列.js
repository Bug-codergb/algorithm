var findLHS = function(nums) {
  nums.sort((a,b)=>a-b);
  let maxCount = 0;
  let slowIndex = 0;
  for(let i=0;i<nums.length;i++){
    while (nums[i] - nums[slowIndex] > 1) {
      slowIndex++;
    }
    if (nums[i] - nums[slowIndex] === 1) {
      maxCount = Math.max(maxCount, i - slowIndex + 1);
    }
  }
  return maxCount;
};
let nums = [1, 3, 2, 2, 5, 2, 3, 7];//1,2,2,2,3,3,5,7 
console.log(findLHS(nums));