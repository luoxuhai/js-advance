const instanceOf = require("../instanceOf");

describe("模拟instanceof关键字", () => {
  it("对于能找到原型返回`true`", () => {
    function Con() {}
    const obj = new Con();
    expect(instanceOf(obj, Con)).toBe(true);
  });

  it("对于不能找到原型返回`false`", () => {
    const obj = {};
    function Con() {}
    expect(instanceOf(obj, Con)).toBe(false);
  });

  it("对于非对象返回`false`", () => {
    function Con() {}
    expect(instanceOf("", Object)).toBe(false);
    expect(instanceOf(1, Number)).toBe(false);
    expect(instanceOf(true, Function)).toBe(false);
    expect(instanceOf(undefined, Con)).toBe(false);
  });

  it("对于非构造函数抛出`TypeError: constructor is not an function`", () => {
    const obj = {};
    const errMsg = "constructor is not an function";
    expect(() => instanceOf(obj, undefined)).toThrow(errMsg);
    expect(() => instanceOf(obj, null)).toThrow(errMsg);
    expect(() => instanceOf(obj, 1)).toThrow(errMsg);
    expect(() => instanceOf(obj, true)).toThrow(errMsg);
    expect(() => instanceOf(obj, {})).toThrow(errMsg);
    expect(() => instanceOf(obj, [])).toThrow(errMsg);
    expect(() => instanceOf(obj, Symbol())).toThrow(errMsg);
  });
});
