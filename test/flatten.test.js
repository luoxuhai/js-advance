const flatten = require("../algorithm/flatten");

describe("实现数组扁平化", () => {
  it("depth分别为为1,2,3的嵌套数组", () => {
    const arr1 = [0, 1, 2, [3, 4]];
    const arr2 = [0, 1, 2, [3, 4], [[4, 5]]];
    const arr3 = [0, 1, 2, [3, 4], [[4, 5]], [[[6, 7]]]];
    expect(flatten(arr1)).toEqual(arr1.flat());
    expect(flatten(arr2)).toEqual(arr2.flat(2));
    expect(flatten(arr3)).toEqual(arr3.flat(3));
  });
});
