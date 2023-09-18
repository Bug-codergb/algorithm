import {Linklist ,Node} from "./00_LinkList.js";

let l = new Linklist(1);
l.insert(2);


var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let cur = head;
  let flag = true;
  let prev = head;
  while (cur) {
    let next = cur.next;
    let nextNext = next?next.next:null;

    cur.next = nextNext;
    prev.next = next??cur;
    prev = cur;
    if(next) next.next = cur;
    if (flag) {
      head = next;
      flag = false
    }
    cur = nextNext;
  }
  return head;
};
console.log(swapPairs(l.head));