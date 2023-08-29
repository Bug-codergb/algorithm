class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Linklist{
  constructor(val) {
    this.header = new Node(val) 
  }
  insert(val) {
    let node = new Node(val);
    let currentNode = this.header;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
}
let link = new Linklist(2);
link.insert(5);
link.insert(4);
link.insert(1);
link.insert(3);
link.insert(8);
link.insert(7);

var reverseList = function (head) {
  let currentNode = head;
  let prevNode = null;
  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
};
reverseList(link.header);
console.log(link);