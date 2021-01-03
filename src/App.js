import './App.css';
// 回文
import isPalindrome from './components/palindrome';
// 罗马数字
import RomanToInt from './components/romanToInt';
// 最长公共前缀
import LongestCommonPrefix from './components/longestCommonPrefix';
// 有效括号
import isValid from './components/isValid';

// 链表（合并、反转）
import { mergeTwoLists, ReverseList, changeList, listAdd, listAddNot } from './components/List';
import { LinkedList } from './components/List/creatListClass';

function App () {
  let linkList1 = new LinkedList();
  linkList1.appendArr([0, 2, 4, 4, 4, 6, 8]);
  let linkList2 = new LinkedList();
  linkList2.appendArr([1, 3, 5, 5, 5, 7, 9]);

  return (
    <div className="App">
      <p>链表1:{linkList1.toString()}</p>
      <p>链表2:{linkList2.toString()}</p>

      <hr />
      <p>链表1反转：{ReverseList(linkList1.head).toString()}</p>
      <p>链表2反转：{ReverseList(linkList2.head).toString()}</p>

      <hr />
      <p>链表1两两交换：{changeList(linkList1).toString()}</p>
      <p>链表2两两交换：{changeList(linkList2).toString()}</p>

      <hr />
      <p>不考虑进位相加： {listAddNot(linkList1, linkList2).toString()}</p>
      <p>进位相加： {listAdd(linkList1, linkList2).toString()}</p>

      <hr />
      <p>合并两个升序链表（合并后仍是升序）：{mergeTwoLists(linkList1.head, linkList2.head).toString()}</p>
    </div>
  );
}

export default App;
