import { tree } from "./00_二叉搜索树.js";

function isSameTreeHandler(p,q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null && q !== null || p !== null && q === null || (p!==null && q!==null && p.val!==q.val)) {
    return false;
  }
  return isSameTreeHandler(p.left, q.left) && isSameTreeHandler(p.right, q.right);
}
var isSameTree = function (p, q) {
  return isSameTreeHandler(p, q);
};
console.log(isSameTree(tree.root,tree.root))