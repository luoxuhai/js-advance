const _instanceof = require("../instanceof");

describe("模拟instanceof关键字", () => {
  it("对于能找到原型返回`true`", () => {
    function Con() {}
    const obj = new Con();
    expect(_instanceof(obj, Con)).toBe(true);
  });

  it("对于不能找到原型返回`false`", () => {
    const obj = {};
    function Con() {}
    expect(_instanceof(obj, Con)).toBe(false);
  });

  it("对于非对象返回`false`", () => {
    function Con() {}
    expect(_instanceof("", Object)).toBe(false);
    expect(_instanceof(1, Number)).toBe(false);
    expect(_instanceof(true, Function)).toBe(false);
    expect(_instanceof(undefined, Con)).toBe(false);
  });

  it("对于非构造函数抛出`TypeError: constructor is not an function`", () => {
    const obj = {};
    const errMsg = "constructor is not an function";
    expect(() => _instanceof(obj, undefined)).toThrow(errMsg);
    expect(() => _instanceof(obj, null)).toThrow(errMsg);
    expect(() => _instanceof(obj, 1)).toThrow(errMsg);
    expect(() => _instanceof(obj, true)).toThrow(errMsg);
    expect(() => _instanceof(obj, {})).toThrow(errMsg);
    expect(() => _instanceof(obj, [])).toThrow(errMsg);
    expect(() => _instanceof(obj, Symbol())).toThrow(errMsg);
  });
});
