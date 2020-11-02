const unique = require("../algorithm/unique");

it("数组去重", () => {
  const array = [1, 2, 5, 5, 5, 5, 555, 55, 5, 444, 555];
  expect(unique(array)).toEqual([...new Set(array)]);
});
