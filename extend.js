/**
 * ES5 继承
 */
function Super() {}
Super.prototype.getStr = function () {
  return "Super";
};

function Sub() {}
Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

module.exports = Sub;
