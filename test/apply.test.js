const _apply = require("../apply");

describe("模拟apply", () => {
  it("使用一个指定的this和一个数组参数来调用一个函数", () => {
    Function.prototype._apply = _apply;
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      Product._apply(this, [name, price]);
    }
    expect(new Food("cheese", 5).name).toBe("cheese");
    expect(new Food("cheese", 5).price).toBe(5);
  });
});
