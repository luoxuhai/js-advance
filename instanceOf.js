/**
 * 模拟instanceOf
 * @param {Object} object 实例对象
 * @param {Function} constructor 构造函数
 * @returns {boolean} 构造函数的prototype属性是否出现在实例对象的原型链上
 */
function _instanceof(object, constructor) {
  if (!/Object|Function/.test(Object.prototype.toString.call(object)))
    return false;
  if (typeof constructor !== "function")
    throw TypeError("constructor is not an function");

  const prototype = constructor.prototype;
  let proto = object.__proto__;
  while (proto !== prototype) {
    proto = proto.__proto__;
    if (proto === null) return false;
  }
  return true;
}

module.exports = _instanceof;
