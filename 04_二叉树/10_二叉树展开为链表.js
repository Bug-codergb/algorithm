import { tree } from "./00_二叉搜索树.js";
import "./02_二叉树的层序遍历.js";

const flatteHandle = (root,handle) => {
  if (root) {
    handle(root);
  }
  if (root.left) {
    flatteHandle(root.left, handle);
  }
  if (root.right) {
    flatteHandle(root.right, handle);
  }
}
var flatten = function(root) {
  if (root === null) {
    return null;
  } else {
    let list=[]
    flatteHandle(root, (node) => {
      console.log(node);
      list.push(node);
    });  
    console.log(list);
    for (let i = 0; i < list.length; i++){
      const item = list[i];
      item.right = list[i+1]??null;
      item.left = null;
    }
    console.log(tree.root)
  }
};
flatten(tree.root);