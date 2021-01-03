// 解题思路：从左到右遍历字符串，如果左边的大于右边的就加上当前值，如果左边小于右边就减去
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const strMap = { 'I': 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
  // 方法一
  // let sum = 0;
  // for (let i = 0; i < s.length; i++) {
  //   if (strMap[s[i]] >= strMap[s[i + 1]] || i == s.length - 1) {
  //     sum += strMap[s[i]];
  //   } else {
  //     sum -= strMap[s[i]];
  //   }
  // }
  // return sum;

  // 方法二
  return s.split('').reduce((prev, next, idx, arr) => strMap[next] < strMap[arr[idx + 1]] ? prev - strMap[next] : prev + strMap[next], 0)


  // 方法三：将map换成switch

};

export default romanToInt;