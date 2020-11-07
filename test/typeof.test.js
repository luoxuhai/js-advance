const _typeof = require("../typeof");

it("实现typeof", () => {
  expect(_typeof("hello")).toBe("string");
  expect(_typeof(1024)).toBe("number");
  expect(_typeof(true)).toBe("boolean");
  expect(_typeof(() => undefined)).toBe("function");
  expect(_typeof({})).toBe("object");
  expect(_typeof(undefined)).toBe("undefined");
  expect(_typeof(null)).toBe("object");
  expect(_typeof(Symbol())).toBe("symbol");
});
