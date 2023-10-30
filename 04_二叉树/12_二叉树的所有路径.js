import { tree } from "./00_二叉搜索树.js";

function binaryTreePathsHandler(root,sum,path) {
  path.push(root.val);
  if (root.left) {
    binaryTreePathsHandler(root.left, sum, path);
    path.pop();
  }
  if (root.right) {
    binaryTreePathsHandler(root.right, sum, path);
    path.pop();
  } else if(!root.left && !root.right){
    sum.push(path.join("->"))
  }
}
var binaryTreePaths = function (root) {
  if (root === null) {
    return []
  }
  let sum = [];
  binaryTreePathsHandler(root, sum,[]);
  return sum
};
console.log(binaryTreePaths(tree.root));