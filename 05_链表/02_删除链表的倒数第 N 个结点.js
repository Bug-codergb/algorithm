import { Linklist } from "./00_LinkList.js";
let len = 0;
function getLen(head) {
  let len = 0;
  let currentNode = head;
  while (currentNode) {
    len += 1;
    currentNode = currentNode.next;
  }
  return len
}
let link = new Linklist(2);
link.insert(5);
link.insert(4);
link.insert(1);
link.insert(3);
link.insert(8);
link.insert(7);
len = getLen(link.header);

var removeNthFromEnd = function (head, n) {
  if (n < 1) {
    return head;
  }
  const len = getLen(head);
  if (n === len) {
    return head.next;
  }
  let currentNode = head;
  let temp = 0;
  while (currentNode) {
    if (temp === len - n-1) {
      const target = currentNode.next;
      const next = target.next;
      currentNode.next = next;
    }
    currentNode = currentNode.next;
    temp += 1;
  }
  return head
};
console.log(removeNthFromEnd(link.header, 1));
