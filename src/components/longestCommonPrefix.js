/**
 * 解题思路：
 * 1、横向比较：取第第一和第二个字符串，找到二者最长公共前缀，再往后比较公共前缀是否符合需求
 * 2、纵向比较：每个字符串的首字母开始比较，相同就继续比较第二个，直到比较到不同返回字符串
 * 3、找出ASCII码最大和最小的两个字符串进行比较取最大相同前缀（先排序再比较大小，时间空间复杂度取决于排序）
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  // 方法一
  // if (strs.length == 0) return "";
  // let prex = strs[0];
  // if (strs.length == 1) return strs[0];

  // for (let i = 1; i < strs.length; i++) {
  //   while (!strs[i].startsWith(prex)) {   // 判断strs前缀是否是prex
  //     prex = prex.substring(0, prex.length - 1);
  //   }
  // }
  // return prex;

  // 方法二
  if (strs.length == 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    let prex = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j][i] != prex) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
};

export default longestCommonPrefix;
