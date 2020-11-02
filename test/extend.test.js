const { Parent, Child } = require("../extend");

describe("ES5 继承", () => {
  it("调用父类方法", () => {
    expect(new Parent("tom1").getMessage()).toBe("Parent:tom1");
  });
  it("子类重写父类方法", () => {
    expect(new Child("tom").getMessage()).toBe("Child:tom");
  });
});
