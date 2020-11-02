const wordFrequency = require("../character_string/wordFrequency");

describe("词频统计", () => {
  it("", () => {
    expect(wordFrequency("the day is sunny the the the sunny is is")).toEqual({
      the: 4,
      is: 3,
      sunny: 2,
      day: 1,
    });
  });
});
