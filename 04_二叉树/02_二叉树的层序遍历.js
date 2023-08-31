import { tree } from "./00_二叉搜索树.js";
function levelOrder(root) {
  if (root === null) {
    return [];
  }
  let queue = [];
  queue.push(root);
  let res = [];
  while (queue.length) {
    let len = queue.length;
    res.push([]);
    for (let i = 0; i < len; i++){
      let node = queue.shift();
      if (node) {
        res[res.length-1].push(node.val)
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
}
console.log(levelOrder(tree.root));