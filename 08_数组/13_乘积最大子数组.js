var maxProduct = function(nums) {
  // let fastIndex = 0, slowIndex = 0;
  // let max = 0,ret=1;
  // while (slowIndex < nums.length && fastIndex < nums.length) {
  //   if(nums[fastIndex]*ret > ret) {
  //     ret *= nums[fastIndex];
  //     fastIndex++;
  //     max = ret > max ? ret : max;
  //   } else {
  //     ret /= nums[slowIndex];
  //     slowIndex++;
  //   }
  // }
  // return max;
};
let nums = [-2,3,-2,4,-9,-1]
console.log(maxProduct(nums))