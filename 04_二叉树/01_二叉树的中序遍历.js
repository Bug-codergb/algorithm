import { tree } from "./00_二叉搜索树.js";

function midOrderLevelHandle(root,handle) {
  if(root.left)midOrderLevelHandle(root.left,handle);
  if (root) {
    handle(root);
  }
  if(root.right)midOrderLevelHandle(root.right,handle);
}
function midOrderLevel(root) {
  if (root === null) {
    return []
  } else {
    let res = []
    midOrderLevelHandle(root, (node) => {
      console.log(node.val)
      res.push(node.val);
    })
    return res;
  }
}
console.log(midOrderLevel(tree.root));