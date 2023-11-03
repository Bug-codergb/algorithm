import { tree } from "./00_二叉搜索树.js";
function diameterOfBinaryTreeHandler(root, path,res) {
  path.push(root.val);
  if (root.left) {
    diameterOfBinaryTreeHandler(root.left, path,res);
    path.pop();
  }
  if (root.right) {
    diameterOfBinaryTreeHandler(root.right, path,res);
    path.pop()
  }
  if (root.left == null && root.right == null) {
    res.push(path.length);
  }
}

function getNodeMax(root) {
  let left = [],right=[];
  if(root.left) diameterOfBinaryTreeHandler(root.left, [], left);
  if(root.right) diameterOfBinaryTreeHandler(root.right, [], right);
  let leftMax = 0,rightMax=0;
  for (let item of left) {
    if (item > leftMax) {
      leftMax = item;
    }
  }
  for (let item of right) {
    if (item > rightMax) {
      rightMax = item;
    }
  }
  return leftMax + rightMax + 1;
}
function preOrder(root,handle) {
  if (root) {
    handle(root);
  }
  if (root.left) preOrder(root.left, handle);
  if (root.right) preOrder(root.right, handle);
}
var diameterOfBinaryTree = function (root) {
  if (root == null) {
    return 0
  }
  let max = 0;
  preOrder(root, (node) => {
    const ret = getNodeMax(node);
    if (ret > max) {
      max = ret;
    }
  })
  return max;
};
console.log(diameterOfBinaryTree(tree.root));