var canJump = function (nums) {
  if(nums.length<=1) return true;
  if (nums[0] === 0) return false;
  
  let maxDistance = 0;
  for (let i = 0; i < nums.length-1; i++){
    let distance = i + nums[i];
    maxDistance = Math.max(distance, maxDistance);
    
    if (nums[i] === 0 && maxDistance === i) {
      return false;
    }
  }
  return maxDistance>=nums.length-1
};
let nums = [1,0,1,0];
console.log(canJump(nums))