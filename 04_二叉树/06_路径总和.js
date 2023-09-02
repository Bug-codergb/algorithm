var hasPathSumHandle =function(root,targetSum,path,sum){
  if (root) {
    sum += root.val;
    path.push(root.val);
    hasPathSumHandle(root.left, targetSum, path, sum);
    hasPathSumHandle(root.right, targetSum, path, sum);
  }
  console.log(path)
}
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  return hasPathSumHandle(root, targetSum,[],0);
};