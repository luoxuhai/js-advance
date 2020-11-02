/**
 * ES5 继承
 */
function Parent(name) {
  this.name = name;
}
Parent.prototype.getMessage = function () {
  return "Parent:" + this.name;
};

function Child(name) {
  Parent.call(this, name);
}
// Object.create是创建了父类原型的副本，与父类原型完全隔离
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    writable: true,
    configurable: true,
  },
});
Child.prototype.getMessage = function () {
  return "Child:" + this.name;
};

module.exports = { Parent, Child };
