var arrayPairSum = function(nums) {
  for (let i = 0; i < nums.length - 1; i++){
    for (let j = 0; j < nums.length - 1 - i; j++){
      if (nums[j + 1] < nums[j]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i+=2){
    sum += nums[i];
  }
  return sum;
};
let nums = [6, 2, 6, 5, 1, 2];
console.log(arrayPairSum(nums));