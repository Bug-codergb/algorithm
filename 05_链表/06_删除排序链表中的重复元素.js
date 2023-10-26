import { Linklist } from "./00_LinkList.js";
let l = new Linklist(2);
l.insert(2);
l.insert(2);
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  let cur = head;
  while (cur && cur.next) {
    let next = cur.next;
    if (next.val === cur.val) {
      let nextNext = next.next ?? null;
      cur.next = nextNext;
    } else {
      cur = cur.next;
    }
    
  }
  return head;
};
console.log(deleteDuplicates(l.head));