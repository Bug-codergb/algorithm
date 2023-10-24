var containsNearbyDuplicate = function(nums, k) {
  let obj={};
  for(let i=0;i<nums.length;i++){
    const item = nums[i];
    console.log(i-obj[item])
    if(obj[item] && (i-obj[item]<=k)){
      return true;
    }
    obj[item] = i;
  }
  console.log(obj)
  return false;
};
console.log(containsNearbyDuplicate([1,2,3,1],3))