import { tree} from "./00_二叉搜索树.js";
var lowestCommonAncestorHandle = function (root, path, p, q,pRes,qRes) {
  if (root) {
    path.push(root);
    if (path.includes(p) && pRes.length === 0) {
      pRes.push(...path);
    }
    if (path.includes(q) && qRes.length === 0) {
      qRes.push(...path);
    }
    if (root.left) lowestCommonAncestorHandle(root.left, path, p, q,pRes,qRes);
    if (root.right) lowestCommonAncestorHandle(root.right, path, p, q, pRes,qRes);
    path.pop();
    return;
  } else {
    return;
  }
};

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }  
  let pRes = [],qRes=[];
  lowestCommonAncestorHandle(root, [], p, q, pRes,qRes);
  let i = 0, minLen = Math.min(pRes.length, qRes.length);
  console.log(pRes,qRes)
  while (i<minLen && pRes[i].val==qRes[i].val) {
    i++;
  }
  return pRes[i - 1];
};
console.log(lowestCommonAncestor(tree.root, 14, 12));