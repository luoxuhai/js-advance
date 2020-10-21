const bubbleSort = require("../bubbleSort");

describe("冒泡排序", () => {
  it("从小到大排序数组", () => {
    const arr = [2, 5, 66];
    expect(bubbleSort(arr)).toEqual(arr);
  });
});
