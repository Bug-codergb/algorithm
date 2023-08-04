var removeDuplicates = function(nums) {
  if(nums.length===0) return 0;
    let n = nums.length;
    let i=0;
    while (i<n){
      let j=i+1;
      while (j < n && nums[i] === nums[j]) {
        nums[j] = undefined;
        j++;
      }
      i=j;
    }
  let slowIndex = 0, fastIndex = 0;
  while (fastIndex < n) {
    if (nums[fastIndex] !== undefined) {
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  while (slowIndex < n) {
    nums.pop();
    slowIndex++;
  }
  return nums.length;
};
let arr = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7];
console.log(removeDuplicates(arr));  