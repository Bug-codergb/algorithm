import { tree } from "./00_二叉搜索树.js";
var preorderTraversalHandler = function (root, handle) {
  if (root) {
    handle(root);
    preorderTraversalHandler(root.left, handle);
    preorderTraversalHandler(root.right, handle);
  }
};
var preorderTraversal = function (root) {
  if (root === null) {
    return []
  } else {
    let res=[]
    preorderTraversalHandler(root, (node) => {
      res.push(node.val);
    });
    return res;
  }
};
console.log(preorderTraversal(tree.root));