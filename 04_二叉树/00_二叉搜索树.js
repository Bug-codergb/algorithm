export class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
export class BinaryTree{
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertHandle(this.root,newNode);
    }
  }
  insertHandle(root,newNode) {
    if (newNode.val < root.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertHandle(root.left,newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertHandle(root.right, newNode);
      }
    }
  }
}
let tree = new BinaryTree();
tree.insert(15);
tree.insert(12);
tree.insert(14);
tree.insert(11);
tree.insert(13);
tree.insert(22);
tree.insert(23);
tree.insert(16);
tree.insert(18);
//console.log(tree)
export {
  tree
}