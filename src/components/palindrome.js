/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  // 方法一
  if (x < 0) {
    return false
  }
  const str = String(x);
  const len = parseInt(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[str.length - 1 - i] !== str[i]) {
      return false;
    }
  }
  return true;

  // 方法二
  // let strX = String(x);
  // let strY = String(x).split('').reverse().join('');
  // if (Number(strX) === Number(strY)) {
  //     return true
  // } else {
  //     return false
  // }

  // 方法三
  // if(x < 0) return false;
  // let originN = x;
  // let newN = 0;
  // while(x>0) {
  //     let temp = x%10;
  //     newN = newN*10 + temp;
  //     x = (x-temp)/10
  // }
  // return originN === newN;

  // 官网解法
  // if (x < 0 || (x % 10 == 0 && x != 0)) {
  //     return false;
  // }
  // let revertedNumber = 0;
  // while (x > revertedNumber) {
  //     revertedNumber = revertedNumber * 10 + x % 10;
  //     x = (x - x % 10) / 10;
  // }
  // return x == revertedNumber || x == (revertedNumber - revertedNumber%10) / 10;
};

export default isPalindrome;