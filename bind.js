/**
 * 模拟bind
 * 创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的预置参数，供调用时使用
 *
 * @param {Object} [thisArg= window | global] 在函数运行时使用的this值
 * @param {any} [args] 参数列表
 * @returns {Function} 原函数的拷贝，并拥有指定this值和初始参数
 */
// 不使用apply或call方法
function bind(thisArg = window || global, ...args) {
  if (typeof this !== "function")
    throw TypeError(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  thisArg[this.name] = this;
  const _this = this;
  return function func() {
    // new之后做的第一步操作(链接原型，绑定this)，然后再执行函数体,this.__proto__ === func.prototype
    if (this instanceof func) return new _this(...args, ...arguments);
    return thisArg[_this.name](...args, ...arguments);
  };
}

// 使用call或apply方法.
function bind1(thisArg = window || global, ...args) {
  if (typeof this !== "function")
    throw TypeError(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  const _this = this;
  return function func() {
    // 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
    if (this instanceof func) return new _this(...args, ...arguments);
    return _this.call(thisArg, ...args, ...arguments);
    // return _this.apply(thisArg, [...args, ...arguments]);
  };
}

module.exports = { bind, bind1 };
