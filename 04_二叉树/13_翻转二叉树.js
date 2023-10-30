import { tree } from "./00_二叉搜索树.js";

function invertTreeHandler(root,left,right) {
  if (left===null && right ===null) {
    return;
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  if(root.left) invertTreeHandler(root.left, root.left.left, root.left.right);
  if(root.right) invertTreeHandler(root.right, root.right.left, root.right.right);
}
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  invertTreeHandler(root, root.left, root.right);
  return root;
};
console.log(invertTree(tree.root));