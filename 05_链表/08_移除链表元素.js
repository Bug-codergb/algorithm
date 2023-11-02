import { Linklist } from "./00_LinkList.js";
var removeElements = function (head, val) {
  if (head === null) {
    return null;
  }
  let cur = head;
  while (cur) {
    let next = cur.next;
    if (next !== null) {
      if (next.val === val) {
        let n = next.next;
        cur.next = n;
      } else {
        cur = cur.next;
      }
      
    } else {
      if (cur.val === val) {
        cur.next = null;
      }
      cur = cur.next;
    }
  }
  if (head.val === val) {
    return head.next;
  }
  return head;
};
let l = new Linklist(21);
l.insert(21);
l.insert(21);
l.insert(21);
l.insert(11);
l.insert(21);
l.insert(23);
l.insert(2);
l.insert(21);
console.log(removeElements(l.head,21));