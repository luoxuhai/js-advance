const _new = require("../new");

describe("模拟new关键字", () => {
  it("实例对象可通过this访问属性", () => {
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    const tom = _new(Person, "Tom", 28);
    expect(tom.name).toBe("Tom");
    expect(tom.age).toBe(28);
  });

  it("对于构造函数返回Function, Array, Date, RegExg, Error则返回该值;否则返回新的对象", () => {
    function Person() {
      return [];
    }
    function Person1() {
      return {};
    }
    function Person2() {
      return () => {};
    }
    function Person3() {
      return "";
    }
    const tom = _new(Person);
    const tom1 = _new(Person1);
    const tom2 = _new(Person2);
    const tom3 = _new(Person3);
    expect(tom).toEqual([]);
    expect(tom1).toEqual({});
    expect(typeof tom2).toBe("function");
    expect(tom3).toEqual({});
  });
});
