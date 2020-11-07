/**
 * 实现typeof
 *
 * - null Array Object -> 'object'
 * - Function -> 'function'
 * - undefined -> 'undefined'
 */
function _typeof(operand) {
  const map = {
    "[object String]": "string",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object Object]": "object",
    "[object Function]": "function",
    "[object Symbol]": "symbol",
    "[object Null]": "object",
    "[object Undefined]": "undefined",
  };
  return map[Object.prototype.toString.call(operand)];
}

module.exports = _typeof;
