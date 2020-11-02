const parseParams = require("../character_string/parseParams");

describe("解析URL Params对象", () => {
  it(`结果: { user: 'anonymous',
              id: [ 123, 456 ],
              city: '北京',
              enabled: true
            }`, () => {
    expect(
      parseParams(
        "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled"
      )
    ).toEqual({
      user: "anonymous",
      id: ["123", "456"],
      city: "北京",
      enabled: true,
    });
  });
});
