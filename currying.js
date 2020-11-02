/**
 * 柯里化Currying
 *
 * 把多参数传入的函数拆成单参数(或部分)函数,内部再返回调用下一个单参数(或部分)函数,依次处理剩余的参数
 * 优点
 *
 * - 参数复用
 * - 提前确认
 * - 延迟运行
 *
 * @example currying(1, 2, 3)(4)() -> 10
 * @returns {number}
 */
function sum(...args1) {
  const result1 = args1.reduce((acc, cur) => acc + cur);
  return function (...args2) {
    if (!args2.length) return result1;
    const result2 = args2.reduce((acc, cur) => acc + cur);
    return sum(result1, result2);
  };
}

module.exports = sum;
