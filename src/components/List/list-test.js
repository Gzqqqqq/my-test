import { ListNode, LinkedList } from './creatListClass';
// 反转一个单链表（例如：输入 1->2->3->4->5->NULL；输出:5->4->3->2->1->NULL）
/**
* 传入的是需要反转的链表的头，返回新的头
* @param {ListNode} head
* @return {ListNode}
*/
// 时间复杂度O(n)  空间复杂度 O(1)
export const reverseList = (head) => {
  let pre = null;   // 前一个的值
  let next = null;  // 后一个的值

  while (head !== null) {
    next = head.next;  // 保存后一个的值
    head.next = pre;   // 当前指向前一个的值
    pre = head;            // 指针后移动，设置pre是当前值
    head = next;           // 指针后移动，设置当前值是next，继续循环，直到链表结束null
  }
  return pre;
};



// 链表两两交换
/** 
* @param {ListNode} head
* @return {ListNode}
*/
// 时间复杂度O(n)  空间复杂度O(1)
export const changeList = (head) => {
  let tempNode = new ListNode(0);
  let prev = tempNode, current = null, nextNode = null;
  tempNode.next = head;

  while (prev.next && prev.next.next) {
    current = prev.next;
    nextNode = prev.next.next;
    prev.next = nextNode;
    current.next = nextNode.next;
    nextNode.next = current;
    prev = current;
  }

  return tempNode.next;
}

// 链表相加考虑进位
/**
* @param {ListNode} head1
* @param {ListNode} head2
* @return {ListNode}
*/
// 时间复杂度O(max(n,m))    空间复杂度 O(max(n,m))
export const listAdd = (l1, l2) => {
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
}

// 链表相加不考虑进位
/**
* @param {ListNode} head1
* @param {ListNode} head2
* @return {ListNode}
*/
// 时间复杂度O(max(n,m))    空间复杂度 O(max(n,m))
export const listAddNot = (l1, l2) => {
  let head = null, tail = null;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return head;
}