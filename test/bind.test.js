const { bind, bind1 } = require("../bind");

describe("模拟bind 返回一个新函数，这个函数的this被指定为bind()的第一个参数，其余参数将作为新函数的预置参数", () => {
  it("不使用call或apply方法", () => {
    Function.prototype._bind = bind;
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    const Food = {};
    const product = Product._bind(Food, "cheese");
    product(5);
    expect(Food.name).toBe("cheese");
    expect(Food.price).toBe(5);
  });

  it("使用call或apply方法", () => {
    Function.prototype._bind = bind1;
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    function Food(name, price) {
      const product = Product._bind(this, name);
      product(price);
    }
    expect(new Food("cheese", 5).name).toBe("cheese");
    expect(new Food("cheese", 5).price).toBe(5);
  });

  it("new返回的函数", () => {
    Function.prototype._bind = bind1;
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }
    const Food = {};
    const newProduct = Product._bind(Food, "cheese");
    expect(new newProduct(5).name).toBe("cheese");
    expect(Food.name).toBeUndefined();
  });
});
