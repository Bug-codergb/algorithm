import { tree } from "./00_二叉搜索树.js";
import "./02_二叉树的层序遍历.js";
var zigzagLevelOrder = function (root) {
  const res = [];
  const queue = [];
  queue.push(root);
  let flag = true;
  while (queue.length) {
    const len = queue.length;
    res.push([]);
    for (let i = 0; i < len; i++){
      const node = queue.shift();
     
      if (flag) res[res.length - 1].push(node.val);
      else {
        res[res.length - 1].unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    flag = !flag;
  }
  return res;
};
console.log(zigzagLevelOrder(tree.root));