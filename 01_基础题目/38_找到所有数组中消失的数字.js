var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let res = [];
  nums = [...new Set(nums)];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++){
    let diff = Math.abs(nums[i] - nums[i + 1])
    if (diff > 1) {
      console.log(diff)
      while (diff > 1) {
        diff--;
        res.push(nums[i] + diff);
        
      }
    }
  }
  let endNum = nums[nums.length - 1],startNum = nums[0];
  for (let i = endNum+1; i <= n; i++){
    res.push(i);
  }
  for (let i = 1; i < startNum; i++){
    res.push(i)
  }
  return res.sort((a,b)=>a-b);
};
let nums = [1,1,1];
console.log(findDisappearedNumbers(nums));