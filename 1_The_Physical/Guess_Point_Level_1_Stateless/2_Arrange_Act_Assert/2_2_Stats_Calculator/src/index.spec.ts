import { calcStats } from ".";

describe("stats calculator", () => {
  it("throws an error when input is empty", () => {
    expect(() => calcStats([])).toThrowError("input must not be empty");
  });

  it("determines min is 1 for sequences that only contain one number like [1]", () => {
    const stats = calcStats([1]);
    expect(stats.min).toBe(1);
  });

  it("determines min is 0 for sequences that only contain zero", () => {
    const stats = calcStats([0]);
    expect(stats.min).toBe(0);
  });

  it("determines min is -1 for sequence of negative numbers like [-2, -1]", () => {
    const stats = calcStats([-2, -1]);
    expect(stats.min).toBe(-2);
  });

  it("determines min is 1 for sequence of positive numbers like [1, 2]", () => {
    const stats = calcStats([1, 2]);
    expect(stats.min).toBe(1);
  });

  it("determines min is -1 for sequences with positive and negative numbers [-1, 1]", () => {
    const stats = calcStats([-1, 1]);
    expect(stats.min).toBe(-1);
  });

  it("determines min is -1 for sequences with zero and negative numbers like [-1, 0]", () => {
    const stats = calcStats([-1, 0]);
    expect(stats.min).toBe(-1);
  });

  it("determines min is 0 for sequences with zero and positive numbers like [0,1]", () => {
    const stats = calcStats([0, 1]);
    expect(stats.min).toBe(0);
  });

  it("determines min is 0 for sequences with negative numbers, zero and positive numbers like [-1, 0, 1]", () => {
    const stats = calcStats([-1, 0, 1]);
    expect(stats.min).toBe(-1);
  });
});
