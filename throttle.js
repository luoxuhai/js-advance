/**
 * 节流函数(简化版)
 * 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 *
 * **适用场景**
 * 1. 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
 * 2. 缩放场景：监控浏览器resize
 * 3. 动画场景：避免短时间内多次触发动画引起性能问题
 *
 * **lodash实现:** [lodash/throttle](https://github.com/lodash/lodash/blob/master/throttle.js)
 * 
 * @param {Function} func 要节流的函数
 * @param {number} [wait=0] 要控制调用间隔的毫秒数。
 * @returns {Function} 返回新的throttle函数。
 */
function throttle(func, wait = 0) {
  let flag = false;
  return function () {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        func.apply(this, arguments);
        flag = false;
      }, wait);
    }
  };
}

module.exports = throttle;
