import {
  Linklist
} from "./00_LinkList.js";
/**
 * 
 * 慢指针每走一步，快指针走两步 
 */
function halfLinklist(head) {
  let slow = head, fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function reverseLinklist(head) {
  let prev = null;
  let cur = head;
  while (cur!==null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
var isPalindrome = function (head) {
  let midNode = halfLinklist(head);
  let end = reverseLinklist(midNode);
  while (end && head) {
    if (head.val !== end.val) {
      return false;
    }
    end = end.next;
    head = head.next;
  }
  return true;
};
let l = new Linklist(2);
l.insert(7)
l.insert(8)
l.insert(9);
l.insert(9);
l.insert(8);
l.insert(7);
l.insert(2);
console.log(isPalindrome(l.head));
