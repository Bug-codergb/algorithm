class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Linklist{
  constructor(val) {
    this.head = new Node(val) 
  }
  insert(val) {
    let node = new Node(val);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
}
export {
  Linklist,
  Node
}