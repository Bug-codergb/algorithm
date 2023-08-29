import {
  Linklist, Node as ListNode
} from "./00_LinkList.js";
let link1 = new Linklist(2);
link1.insert(4);
link1.insert(4);
link1.insert(7);
link1.insert(9);

let link2 = new Linklist(1);
link2.insert(3)
link2.insert(5)
link2.insert(6)
link2.insert(8)
link2.insert(9)
link2.insert(20)
link2.insert(21)

var mergeTwoLists = function(list1, list2) {
  let first = list1.head;
  let second = list2.head;
  let res = new ListNode(0);
  let currentNode = res;
  while (first && second) {
    if (first.val < second.val) {
      currentNode.next = first;
      first = first.next;
    } else {
      currentNode.next = second;
      second = second.next;
    }
    currentNode = currentNode.next
  }
  currentNode.next = first == null ? second : first;
  return res.next;
};
console.log(mergeTwoLists(link1, link2));