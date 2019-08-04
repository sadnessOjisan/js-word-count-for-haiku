import countFunc from "./main";

describe("countFunc", () => {
  it("正常", () => {
    const GIVEN_WORD = "リアクト";
    const actual = countFunc(GIVEN_WORD);
    expect(actual).toBe(4);
  });
  it("小文字", () => {
    const GIVEN_WORD = "ジャヴァスクリプト";
    const actual = countFunc(GIVEN_WORD);
    expect(actual).toBe(7);
  });
});
