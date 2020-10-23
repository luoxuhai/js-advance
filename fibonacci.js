/**
 * 第3项开始，每一项都等于前两项之和
 *
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
  return n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
