/**
 * 防抖函数(简化版)
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
 *
 * **适用场景:**
 * 1. 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
 * 2. 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似。
 *
 * **lodash实现:** [lodash/debounce](https://github.com/lodash/lodash/blob/master/debounce.js)
 *
 * @param {Function} func 要防抖的函数.
 * @param {number} [wait=0] 要控制调用的毫秒数。
 * @returns {Function} 返回新的debounce函数。
 */
function debounce(func, wait = 0) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, wait);
  };
}

module.exports = debounce;
