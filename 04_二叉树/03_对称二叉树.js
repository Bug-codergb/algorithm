import { BinaryTree } from "./00_二叉搜索树.js";
let tree = new BinaryTree();

function isSymmetricHandle(leftNode, rightNode) {
  if (!leftNode && !rightNode) {
    return true;
  }
  if (leftNode && !rightNode || !leftNode && rightNode) {
    return false;
  }
  if (leftNode.val !== rightNode.val) {
    return false;
  }
  return isSymmetricHandle(leftNode.left, rightNode.right)
    && isSymmetricHandle(rightNode.left) && isSymmetricHandle(leftNode.right);
}
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  } else {
    return isSymmetricHandle(root.left,root.right);
  }
};