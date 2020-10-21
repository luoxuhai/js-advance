/**
 * 模拟Object.create
 *
 * @param {Object} [proto] 新创建对象的原型对象
 * @param {Object} [propertiesObject] 需要传入一个对象，该对象的属性类型参照[Object.defineProperties()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)的第二个参数
 * @returns {Object} 一个新对象，带有指定的原型对象和属性
 */
function create(proto, propertiesObject) {
  const obj = {};
  if (proto) obj.__proto__ = proto;
  if (propertiesObject instanceof Object) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
}

module.exports = create;
