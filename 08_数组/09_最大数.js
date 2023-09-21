var largestNumber = function(nums) {
  nums.sort((a, b) => {
    if (Number(`${a}${b}`) > Number(`${b}${a}`)) {
      return -1
    } else if (Number(`${a}${b}`) < Number(`${b}${a}`)) {
      return 1;
    } else {
      return 0
    }
  })
  let index = 0;
  while (nums[index] === 0) {
    nums.shift();
  }
  if (nums.length === 0) {
    nums.push(0)
  }
  return nums.join("");
};
let nums = [0,0,0];
console.log(largestNumber(nums));