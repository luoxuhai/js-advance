/**
 * 阶乘
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

module.exports = factorial;
