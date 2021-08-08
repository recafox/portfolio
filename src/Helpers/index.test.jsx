import { getTime, getEndTime } from "Helpers";

test("return YYYY-MM-DD", () => {
  const originTime = "2021-07-05T00:00:00.000Z";
  expect(getTime(originTime)).toBe("2021-07-05");
});

describe("getEndTime", () => {
  test("return `在職中` if the time passed in is still in future", () => {
    const time = "2221-07-05T00:00:00.000Z";
    expect(getEndTime(time)).toBe("在職中");
  });

  test("return formatted timestring if the time passed in is in the past", () => {
    const time = "2002-07-05T00:00:00.000Z";
    expect(getEndTime(time)).toBe("2002-07-05");
  });
});
