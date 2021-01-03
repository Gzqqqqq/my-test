/*
* 1、替换法；找到一个[]、{}、()就替换成空，最后如果结果是空则是正确匹配的 暴力解法
* 2、利用栈先进后出进行匹配（中规中矩，写的略微有些麻烦）
*/

const map = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const Json = {
  ')': '(',
  '}': '{',
  ']': '['
}
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  // 方法一：替换
  // if (s.length % 2 !== 0) return false;  // 先判定字符串长度
  // while (s.includes('{}') || s.includes('[]') || s.includes('()')) {
  //   s = s.replace('{}', '');
  //   s = s.replace('[]', '');
  //   s = s.replace('()', '');
  // }
  // return s === '';

  // 方法二：栈先进后出  写的太麻烦了
  // if (s.length % 2 !== 0) return false;  // 先判定字符串长度
  // let stack = [];
  // for (let i in s) {
  //   if (s[i] == '{' || s[i] == '(' || s[i] == '[') {
  //     stack.push(s[i]);
  //   } else if (s[i] == '}') {
  //     if (stack.length === 0) {
  //       return false;
  //     }
  //     if (stack[stack.length - 1] == '{') {
  //       stack.pop();
  //     } else {
  //       return false
  //     }
  //   } else if (s[i] == ')') {
  //     if (stack.length === 0) {
  //       return false;
  //     }
  //     if (stack[stack.length - 1] == '(') {
  //       stack.pop();
  //     } else {
  //       return false
  //     }
  //   } else if (s[i] == ']') {
  //     if (stack.length === 0) {
  //       return false;
  //     }
  //     if (stack[stack.length - 1] == '[') {
  //       stack.pop();
  //     } else {
  //       return false
  //     }
  //   }
  // }
  // return stack.length === 0

  // 方法二改进：
  // if (s.length % 2 !== 0) return false;  // 先判定字符串长度
  // let stack = [];
  // for (let i in s) {
  //   if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
  //     stack.push(s[i]);
  //   } else if (stack.length === 0 || map[stack[stack.length - 1]] !== s[i]) {
  //     return false
  //   } else {
  //     stack.pop();
  //   }
  // }
  // return stack.length === 0

  // 方法三：
  if (s.length % 2 !== 0) return false;  // 先判定字符串长度
  let stack = [];
  for (let i in s) {
    let temp = s[i];
    if (temp in Json) {
      let template = stack.length !== 0 ? stack.pop() : '#'
      if (template != Json[temp]) {
        return false;
      }
    } else {
      stack.push(temp);
    }
  }
  return stack.length === 0

};

export default isValid;