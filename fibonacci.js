/**
 * 第3项开始，每一项都等于前两项之和
 *
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
  return n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// 动态规划实现
function fibonacciDP(n) {
  const array = Array.from({ length: n + 1 }, (_, k) => (k < 2 ? k : null));
  for (let i = 2; i < array.length; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array[n];
}

module.exports = {
  fibonacci,
  fibonacciDP,
};
