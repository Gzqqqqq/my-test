import './App.css';
// 回文
import isPalindrome from './components/palindrome';
// 罗马数字
import RomanToInt from './components/romanToInt';
// 最长公共前缀
import LongestCommonPrefix from './components/longestCommonPrefix';
// 有效括号
import isValid from './components/isValid';

// 链表（合并、反转、相加、两两交换）
// import { mergeTwoLists, reverseList, changeList, listAdd, listAddNot } from './components/List';
import { reverseList, changeList, listAdd, listAddNot } from './components/List/list-test';
import { LinkedList } from './components/List/creatListClass';

function App () {
  let linkList1 = new LinkedList();
  linkList1.appendArr([0, 0, 2, 4, 6, 8, 9]);
  let linkList2 = new LinkedList();
  linkList2.appendArr([1, 0, 3, 5, 7, 9, 9]);

  let linkList3 = new LinkedList();
  linkList3.appendArr([9, 9, 9, 9]);
  let linkList4 = new LinkedList();
  linkList4.appendArr([5, 6, 4]);

  const reverseList1 = new LinkedList(reverseList(linkList1.head), linkList1.length);
  const changeList2 = new LinkedList(changeList(linkList2.head), linkList2.length);

  const add1 = new LinkedList(listAdd(linkList3.head, linkList4.head), Math.max(linkList3.length, linkList4.length));
  const add2 = new LinkedList(listAddNot(linkList3.head, linkList4.head), Math.max(linkList3.length, linkList4.length));

  return (
    <div className="App">
      <p>链表1: [0, 0, 2, 4, 6, 8, 9]</p>
      <p>链表2: [1, 0, 3, 5, 7, 9, 9]</p>

      <hr />
      <p>链表1反转：{reverseList1.toString()}</p>

      <hr />
      <p>链表2两两交换：{changeList2.toString()}</p>

      <hr />
      <p>[9,9,9,9] + [5,6,4]</p>
      <p>不考虑进位相加： {add2.toString()}</p>
      <p>进位相加： {add1.toString()}</p>

      <hr />
      {/* <p>合并两个升序链表（合并后仍是升序）：{mergeTwoLists(linkList1.head, linkList2.head).toString()}</p> */}
    </div>
  );
}

export default App;
