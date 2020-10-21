const _call = require("../call");

describe("模拟call", () => {
  it("使用一个指定的this和多个参数来调用一个函数", () => {
    Function.prototype._call = _call;
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      Product._call(this, name, price);
    }
    expect(new Food("cheese", 5).name).toBe("cheese");
    expect(new Food("cheese", 5).price).toBe(5);
  });
});
