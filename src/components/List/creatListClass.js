
//  辅助类，用来描述链表中的节点
export function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 双链表节点
export function ListNode2 (val) {
  this.val = (val === undefined ? 0 : val)
  this.next = null
  this.previous = null
}

// 链表类
export class LinkedList {
  constructor(headNode, nodeLength) {
    this.length = nodeLength || 0;
    this.head = headNode || null;
  }

  // 添加节点single  append时间复杂度==getElementAt的复杂度 O(n)
  append = (element) => {
    let node = new ListNode(element);
    // 当前列表为空，直接添加到head后面
    if (this.head === null) {
      this.head = node;
    } else {  // 找到链表结尾,添加新元素
      let lastNode = this.getElementAt(this.length - 1);
      lastNode.next = node;
    }
    this.length++;
    return true;
  }

  // 添加节点double
  appendDouble = (element) => {
    let node = new ListNode2(element);
    // 当前列表为空，直接添加到head后面
    if (this.head === null) {
      this.head = node;
    } else {  // 找到链表结尾,添加新元素
      let lastNode = this.getElementAt(this.length - 1);
      lastNode.next = node;
      node.previous = lastNode;
    }
    this.length++;
    return true;
  }

  // 批量添加数组：   O(n*m)
  appendArr = (eleArr) => {
    eleArr.forEach(item => {
      this.append(item);
    });
  }

  // 指定位置插入single   O(n)
  insert = (element, position) => {
    if (position < 0 || position > this.length) {
      return null;
    }
    let node = new ListNode(element);
    // 插入head头部
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {  // 找到要插入位置的pre，进行替换
      let prevNode = this.getElementAt(position - 1);
      node.next = prevNode.next;
      prevNode.next = node;
    }
    this.length++;
    return true;
  }

  // 指定位置插入double
  insertDouble = (element, position) => {
    if (position < 0 || position > this.length) {
      return null;
    }
    let node = new ListNode2(element);
    // 插入head头部
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {  // 找到要插入位置的pre，进行替换
      let currentNode = this.getElementAt(position);
      node.previous = currentNode.previous;
      currentNode.previous.next = node;

      node.next = currentNode
      currentNode.previous = node;
    }
    this.length++;
    return true;
  }

  // 指定位置删除single   O(n)
  removeAt = (position) => {
    if (position < 0 || position > this.length) {
      return null;
    }
    // 标记当前要删除的元素
    let current = this.head;

    if (position == 0) { // 删除head
      this.head = current.next;
    } else {
      let prevNode = this.getElementAt(position - 1);
      current = prevNode.next;
      prevNode.next = current.next;
    }
    this.length--;
    return current;
  }

  // 指定位置删除double
  removeAtDouble = (position) => {
    if (position < 0 || position > this.length) {
      return null;
    }
    // 标记当前要删除的元素
    let current = this.head;

    if (position == 0) { // 删除head
      this.head = current.next;
    } else {
      let curNode = this.getElementAt(position);
      curNode.previous.next = curNode.next;
      curNode.next.previous = curNode.previous;
    }
    this.length--;
    return current;
  }

  // 删除指定元素   O(n)
  removeEle = (element) => {
    let position = this.indexOf(element);
    return this.removeAt(position);
  }

  // 返回指定元素下标  O(n)
  indexOf = (element) => {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (current.val === element) {
        return i;
      }
      current = current.next;
    }

    return -1
  }

  // 返回指定下标元素  getElementAt的时间复杂度为O(n)
  getElementAt = (position) => {
    if (position < 0 || position > this.length) {  // 超出下标
      return null;
    }

    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next
    }

    return current;
  }

  // 判断链表是否为空  O(1)
  isEmpty = () => {
    return this.length === 0;
  }

  // 返回链表个数  O(1)
  size = () => {
    return this.length;
  }

  // 返回链接头部   O(1)
  getHead = () => {
    return this.head;
  }

  // 清空链表  O(1)
  clear = () => {
    this.head = null;
    this.length = 0;
  }

  // 指定格式输出链表元素  O(n)
  toString = () => {
    let current = this.head;
    let s = '';
    while (current.next) {
      s += current.val + '->'
      current = current.next
    }
    s += current.val;
    return s;
  }

  // 更新指定位置元素  O(n)
  updateList = (position, element) => {
    // 指定位置删除，再新增
    this.removeAt(position);
    this.insert(element, position);
  }
}
