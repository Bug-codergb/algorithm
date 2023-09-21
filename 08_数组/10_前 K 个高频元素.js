var topKFrequent = function(nums, k) {
  let m = new Map();
  for (let item of nums) {
    m.set(item, (m.get(item) || 0) + 1);
  }
  let arr = Array.from(m);
  arr.sort((a, b) => {
    return b[1]-a[1]
  })
  if (k === 0) {
    return []
  } else {
    return arr.slice(0,k).map((item)=>item[0])
  }
};
let nums = [1, 1, 1, 2, 2, 3,3,3,3], k = 2;
console.log(topKFrequent(nums, k));