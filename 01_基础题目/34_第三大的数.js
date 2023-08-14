// [1,3,4] 2
var thirdMax = function (nums) {
  let sortArr = [];
  sortArr.push(nums[0]);
  nums = [...new Set(nums)]
  for (let i = 1; i < nums.length; i++){
    let index = sortArr.length-1;
    while (index >= 0 && sortArr[index]>nums[i]) {
      index--;
    }
    sortArr.splice(index + 1, 0, nums[i]);
    if (sortArr.length > 3) {
      sortArr.shift();
    }
  }
  console.log(sortArr)
  return sortArr.length>2 ? sortArr[0] : sortArr[sortArr.length-1]
};
let arr = [1, 2, 2, 5, 3, 5];
console.log(thirdMax(arr));