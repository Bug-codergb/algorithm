var maximumProduct = function(nums) {
  nums.sort((a,b)=>a-b);
  let i = nums.length-1;
  return Math.max(nums[i]*nums[i-1]*nums[i-2], nums[i]*nums[0]*nums[1] );
};
let num = [-100, -98, -1, 2, 3, 4];
console.log(maximumProduct(num));