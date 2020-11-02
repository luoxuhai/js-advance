/**
 * 两个数不使用四则运算得出和
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  if (a === 0) return b;
  if (b === 0) return a;
  const _a = a ^ b;
  const _b = (a & b) << 1;
  return sum(_a, _b);
}

module.exports = sum;
