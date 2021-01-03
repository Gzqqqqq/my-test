
import { ListNode, LinkedList } from './creatListClass';
// 合并链表 思路：循环对比两个链表的每个节点的大小，append到一个新的链表上，最后返回新的链表
/**
* 传入的是两个链表的头，返回的新链表
* @param {ListNode} l1
* @param {ListNode} l2
* @param {boolean} isConsole
* @return {LinkedList}
*/
// 
export const mergeTwoLists = (l1, l2, isConsole = false) => {
  let cur = new LinkedList();
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.append(l1.val);
      l1 = l1.next;
    } else {
      cur.append(l2.val);
      l2 = l2.next;
    }
  }
  if (!l1) {
    cur.append(l2.val);
  } else {
    cur.append(l1.val);
  }
  isConsole && console.debug('=======mergeTwoLists:', cur.toString());
  return cur;
};

// 反转链表 思路：创建一个新的链表，循环原来的链表，一个个插入新链表的head实现反转单链表
/**
* 传入的是需要反转的链表的头，返回新链表
* @param {ListNode} l1
* @param {boolean} isConsole
* @return {LinkedList}
*/
export const reverseList = (l1, isConsole = false) => {
  let cur = new LinkedList();
  while (l1) {
    cur.insert(l1.val, 0); // 插入head的位置
    l1 = l1.next;
  }
  isConsole && console.debug('=======reserveList:', cur.toString());
  return cur
};

// 链表两两交换
/** 
* 1、改动原链表，利用链表的updateList方法进行操作
* 2、创建新链表，利用链表的append方法,此方法不会影响原来的链表（还需要再完善一下）
* @param {LinkedList} l1
* @param {boolean} isConsole
* @return {LinkedList}
*/
export const changeList = (l1, isConsole = false) => {
  // 方法一：
  // for (let i = 0; i < l1.length; i++) {
  //   if (i % 2 == 0 && i !== l1.length - 1) {
  //     let tempVal = l1.getElementAt(i).val;  // 前面的值
  //     // 把后面的值赋值给前面
  //     l1.updateList(i, l1.getElementAt(i + 1).val);
  //     // 把保存的前面的值给后面
  //     l1.updateList(i + 1, tempVal)
  //   }
  // }
  // isConsole && console.debug('=====changeList:', l1.toString());
  // return l1;

  // 方法二：
  let cur = new LinkedList();
  for (let i = 0; i < l1.length; i++) {
    if (l1.length % 2 === 0) {  // 偶数交换
      if (i % 2 == 0) {
        cur.append(l1.getElementAt(i + 1).val);
      } else {
        cur.append(l1.getElementAt(i - 1).val);
      }
    } else {  // 奇数个数交换，后面一个不交换
      if (i !== l1.length - 1) {
        if (i % 2 == 0) {
          cur.append(l1.getElementAt(i + 1).val);
        } else {
          cur.append(l1.getElementAt(i - 1).val);
        }
      } else {
        cur.append(l1.getElementAt(i).val);
      }
    }
  }
  isConsole && console.debug('=====changeList:', cur.toString());
  return cur;
}

// 链表相加不考虑进位
/**
* 思路：将相加的链表倒序之后从左到右相加，结果再倒叙回来（会造成额外的内容用来创建新的倒序链表）
* @param {LinkedList} l1 
* @param {LinkedList} l2 
* @param {boolean} isConsole
* @return {LinkedList}
*/
export const listAddNot = (l1, l2, isConsole = false) => {
  let newList = new LinkedList();
  let reverseL1 = reverseList(l1.head);
  let reverseL2 = reverseList(l2.head);
  for (let i = 0; i < Math.max(reverseL1.length, reverseL2.length); i++) {
    newList.append(((reverseL1.getElementAt(i)?.val || 0) + (reverseL2.getElementAt(i)?.val || 0)) % 10);
  }
  newList = reverseList(newList.head);
  isConsole && console.debug('=======ListAddNot:', newList.toString());
  return newList;
}

// 两个链表相加进位，在上面不进位的基础上，计算进位数值，在相加的时候加上temp进位
/**
* 思路：将相加的链表倒序之后从左到右相加，结果再倒叙回来（会造成额外的内容用来创建新的倒序链表）
* @param {LinkedList} l1 
* @param {LinkedList} l2 
* @param {boolean} isConsole
* @return {LinkedList}
*/
export const listAdd = (l1, l2, isConsole = false) => {
  let newList = new LinkedList();
  let reverseL1 = reverseList(l1.head);
  let reverseL2 = reverseList(l2.head);
  let temp = 0;
  for (let i = 0; i < Math.max(reverseL1.length, reverseL2.length); i++) {
    newList.append(((reverseL1.getElementAt(i)?.val || 0) + (reverseL2.getElementAt(i)?.val || 0) + temp) % 10);
    temp = parseInt(((reverseL1.getElementAt(i)?.val || 0) + (reverseL2.getElementAt(i)?.val || 0) + temp) / 10); //计算是否进位
  }
  if (temp) {  // 最高位进位
    newList.append(temp);
  }
  newList = reverseList(newList.head);
  isConsole && console.debug('=======ListAdd:', newList.toString());
  return newList;
}