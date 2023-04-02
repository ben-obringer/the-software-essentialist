import { calcStats } from ".";

describe("stats calculator", () => {
  it("throws an error when input is empty", () => {
    expect(() => calcStats([])).toThrowError("input must not be empty");
  });

  it("determines min is -1 for [-1, 0]", () => {
    const stats = calcStats([-1, 0]);
    expect(stats.min).toBe(-1);
  });

  it("determines min is -1 for [0, -1]", () => {
    const stats = calcStats([0, -1]);
    expect(stats.min).toBe(-1);
  });
});
