const createObject = require("../Object.create");

describe("模拟Object.create", () => {
  it("返回一个新对象，带有指定的原型对象和属性", () => {
    const obj = {
      foo: () => "foo",
    };
    const newObj = createObject(obj, {
      hello: {
        value: "hello",
        writable: false,
        configurable: true,
      },
    });
    expect(newObj.foo()).toBe("foo");
    expect(newObj.hello).toBe("hello");
    newObj.hello = "hello1";
    expect(newObj.hello).toBe("hello");
    delete newObj.hello;
    expect(newObj.hello).toBeUndefined();
  });
});
