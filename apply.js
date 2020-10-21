/**
 * 模拟apply
 * 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
 * 
 * @param {Object} [thisArg= window | global] 在函数运行时使用的this值
 * @param {any} [argsArray] 一个数组或者类数组对象
 * @returns {any} 调用函数的返回值
 */
function apply(thisArg, argsArray) {
  thisArg._func = this;
  let result;
  if (Array.isArray(argsArray)) result = thisArg._func(...argsArray);
  else result = thisArg._func();
  delete thisArg._func;
  return result;
}

module.exports = apply;
