/**
 * 实现一个new
 */
function _new() {
  const obj = {};
  const constructor = Array.prototype.shift.call(arguments);
  // 链接原型
  obj.__proto__ = constructor.prototype;
  // this指向新创建的对象
  const result = constructor.apply(obj, arguments);
  return /object|function/.test(typeof result) ? result : obj;
}

module.exports = _new;
