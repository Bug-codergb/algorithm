var intersect = function(nums1, nums2) {
  let nums1M = new Map();
  let nums2M = new Map();

  for (let item of nums1) {
    nums1M.set(item,(nums1M.get(item)||0)+1)
  }

  for (let item of nums2) {
    nums2M.set(item,(nums2M.get(item)||0)+1)
  }
  if (nums2.length < nums1.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  let res = [];
  for (let item of nums1) {
    if (!res.includes(item) && nums2.includes(item)) {
      let nums1Mr = nums1M.get(item);
      let nums2Mr = nums2M.get(item);
      let min = Math.min(nums1Mr, nums2Mr);
      let temp = new Array(min).fill(item);
      res.push(...temp);
    }
  }
  return res;
};
let nums1 = [4, 9, 5,4,4], nums2 = [10,9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));