/**
 * 实现一个new
 * 
 * 1. 创建新对象
 * 2. 新对象的__proto__指向构造函数的prototype
 * 3. 执行构造函数，this指向新对象
 * 4. 如果构造函数返回类型为对象类型，则返回构造函数的返回值，否则返回新对象
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
