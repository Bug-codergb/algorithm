import { tree } from "./00_二叉搜索树.js";
var averageOfLevels = function(root) {
  let ret = [];
  if (root == null) {
    return ret;
  }
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let l = queue.length;
    let res = [];
    for (let i = 0; i < l; i++){
      let node = queue.shift();
      res.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    let count = res.length;
    let sum = res.reduce((prev, next) => {
      return prev + next;
    })
    ret.push(sum/count)
  }
  return ret;
};
console.log(averageOfLevels(tree.root));