const { trim, trimRE } = require("../character_string/trim");

describe("实现trim方法", () => {
  it("不使用正则表达式", () => {
    expect(trim("   不使用  正则表达式 ")).toBe("不使用  正则表达式");
  });
  it("使用正则表达式", () => {
    expect(trimRE("   使用  正则表达式 ")).toBe("使用  正则表达式");
  });
});
