var twoSum = function(nums, target) {
  let m = new Map();//定义一个哈希表，用于存储每一个数字以及它对应的索引
  let len = nums.length;
  for (let i = 0; i < len; i++){
    const item = nums[i];
    //在哈希表中获取查找target-item,如果找到了则说明存在
    if (m.get(target - item)!==undefined) {
      return [m.get(target - item), i];
    }
    m.set(item, i);
  }
  return []
};
let nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));