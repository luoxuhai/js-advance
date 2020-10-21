/**
 * 模拟call
 * 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
 *
 * @param {Object} [thisArg= window | global] 在函数运行时使用的this值
 * @param {any} [args] 参数列表
 * @returns {any} 调用函数的返回值
 */
function call(thisArg = window || global, ...args) {
  thisArg._func = this;
  const result = thisArg._func(...args);
  delete thisArg._func;
  return result;
}

module.exports = call;
