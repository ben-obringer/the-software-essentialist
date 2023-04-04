import { calcStats } from ".";

describe("stats calculator", () => {
  it("throws an error when input is empty", () => {
    expect(() => calcStats([])).toThrowError("input must not be empty");
  });

  test.each([
    { arr: [0, 0], expected: 0, arrDesc: "of zeros" },
    { arr: [-2, -1], expected: -2, arrDesc: "of negative numbers" },
    { arr: [1, 2], expected: 1, arrDesc: "of positive numbers" },
    {
      arr: [-1, 1],
      expected: -1,
      arrDesc: "with positive and negative numbers",
    },
    { arr: [-1, 0], expected: -1, arrDesc: "with zero and negative numbers" },
    { arr: [0, 1], expected: 0, arrDesc: "with zero and positive numbers" },
    {
      arr: [-1, 0, 1],
      expected: -1,
      arrDesc: "with negative numbers, zero and positive numbers",
    },
    {
      arr: [1],
      expected: 1,
      arrDesc: "with only one number",
    },
  ])(
    "determines min is $expected for sequence $arrDesc like $arr",
    ({ arr, expected }) => {
      const stats = calcStats(arr);
      expect(stats.min).toBe(expected);
    }
  );

  test.each([
    { arr: [0, 0], expected: 0, arrDesc: "of zeros" },
    { arr: [-2, -1], expected: -1, arrDesc: "of negative numbers" },
    { arr: [1, 2], expected: 2, arrDesc: "of positive numbers" },
    {
      arr: [-1, 1],
      expected: 1,
      arrDesc: "with positive and negative numbers",
    },
    { arr: [-1, 0], expected: 0, arrDesc: "with zero and negative numbers" },
    { arr: [0, 1], expected: 1, arrDesc: "with zero and positive numbers" },
    {
      arr: [-1, 0, 1],
      expected: 1,
      arrDesc: "with negative numbers, zero and positive numbers",
    },
    {
      arr: [1],
      expected: 1,
      arrDesc: "with only one number",
    },
  ])(
    "determines max is $expected for sequence $arrDesc like $arr",
    ({ arr, expected }) => {
      const stats = calcStats(arr);
      expect(stats.max).toBe(expected);
    }
  );
});
