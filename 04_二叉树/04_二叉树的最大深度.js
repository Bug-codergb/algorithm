var maxDepth = function (root) {
  if (root === null) {
    return 0
  } else {
    return Math.max(maxDepth(root.left) + 1,maxDepth(root.right)+1);
  }
};