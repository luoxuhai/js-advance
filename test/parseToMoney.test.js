const { parseToMoney } = require("../character_string/parseToMoney");

describe("实现千位分隔符", () => {
  it("保留三位小数", () => {
    expect(parseToMoney(1234.56)).toBe("1,234.56");
    expect(parseToMoney(123456789)).toBe("123,456,789");
    expect(parseToMoney(1087654.321)).toBe("1,087,654.321");
    expect(parseToMoney(2232)).toBe("2,232");
  });
});
