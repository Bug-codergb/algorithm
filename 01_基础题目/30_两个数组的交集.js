var intersection = function(nums1, nums2) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  let nums = nums1.concat(nums2);
  let res = [];
  for (let item of nums) {
    if (nums1.includes(item) && nums2.includes(item)) {
      res.push(item);
    }
  }
  return [...new Set(res)];
};
let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersection(nums1, nums2));