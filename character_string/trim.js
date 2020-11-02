/**
 * 实现trim方法
 *
 * @param {string} str
 * @returns {string}
 */
function trim(str) {
  let start = 0;
  let end = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") start++;
    else break;
  }
  for (let j = str.length - 1; j > 0; j--) {
    if (str[j] === " ") end--;
    else break;
  }
  return str.substring(start, end);
}

// 使用正则
function trimRE(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

module.exports = { trim, trimRE };
