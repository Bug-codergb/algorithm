import { Linklist ,Node} from "./00_LinkList.js";
const l1 = new Linklist(2);
l1.insert(4);
l1.insert(9);
const l2 = new Linklist(5);
l2.insert(6);
l2.insert(4);
l2.insert(9);

var addTwoNumbers = function (l1, l2) {
  let res = new ListNode(0);
  let current = res;
  let yu = 0;
  while (l1 || l2||yu) {
    const sum = (l1?l1.val:0) + (l2?l2.val:0) + yu;
    let num = sum;
    if (sum >= 10) {
      num = sum % 10;
      yu = 1
    } else {
      yu=0
    }

    let node = new ListNode(num);
    current.next = node;
    current = current.next;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  return res.next;
};
console.log(addTwoNumbers(l1,l2));