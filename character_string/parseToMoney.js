/**
 * 实现千位分隔符
 *
 * parseToMoney(1234.56) => '1,234.56'
 *
 * @param {number} num
 * @return {string}
 */
function parseToMoney(num) {
  const [integer, decimal] = String.prototype.split.call(
    parseFloat(num.toFixed(3)),
    "."
  );
  const arr = integer.split("");
  for (let i = 1; i <= Math.floor(integer.length / 3); i++) {
    const index = arr.length - 3 * i;
    if (index !== 0) arr[index] = "," + arr[index];
  }
  return arr.join("") + (decimal ? "." + decimal : "");
}

// 正则表达式
function parseToMoneyRe(num) {
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, ".");
  integer = integer.replace(/\d(?=(\d{3})+$)/g, "$&,");
  return integer + (decimal ? "." + decimal : "");
}

module.exports = { parseToMoney, parseToMoneyRe };
