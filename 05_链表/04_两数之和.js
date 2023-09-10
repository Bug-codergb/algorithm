import { Linklist ,Node} from "./00_LinkList.js";
const l1 = new Linklist(2);
l1.insert(4);
l1.insert(9);
const l2 = new Linklist(5);
l2.insert(6);
l2.insert(4);
l2.insert(9);

function reverseLinkList(l) {
  let prev = null;
  let cur = l.head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

var addTwoNumbers = function (l1, l2) {
  let cur1 = l1.head;
  let cur2 = l2.head;
  while (cur1.next && cur2.next) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
 
  if (!cur1.next) {
    while (cur2.next) {
      cur1.next = new Node(0);
      cur2 = cur2.next;
    }
  } else {
    while (cur1.next) {
      cur2.next = new Node(0)
      cur1 = cur1.next;
    }
  }
 
  const newL1 = l1;
  const newL2 = l2;
  console.log(newL1,newL2)
  let res = new Linklist(0);
  let current = res;
  let h1 = newL1.head;
  let h2 = newL2.head;
  let yu = 0;

  while (h1 || h2||yu) {
    const sum = (h1?h1.val:0) + (h2?h2.val:0) + yu;
    let num = sum;
    if (sum >= 10) {
      num = sum % 10;
      yu = 1
    } else {
      yu=0
    }

    let node = new Node(num);
    current.next = node;
    current = current.next;
    if(h1) h1 = h1.next;
    if(h2) h2 = h2.next;
  }
  return res.next;
};
console.log(addTwoNumbers(l1,l2));