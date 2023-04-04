import { calcStats } from ".";

describe("stats calculator", () => {
  it("throws an error when input is empty", () => {
    expect(() => calcStats([])).toThrowError("input must not be empty");
  });

  test.each([
    { arr: [0, 0], expected: 0, arrDesc: "zeros" },
    { arr: [-2, -1], expected: -2, arrDesc: "negative numbers" },
    { arr: [1, 2], expected: 1, arrDesc: "positive numbers" },
    {
      arr: [-1, 1],
      expected: -1,
      arrDesc: "positive and negative numbers",
    },
    { arr: [-1, 0], expected: -1, arrDesc: "zero and negative numbers" },
    { arr: [0, 1], expected: 0, arrDesc: "zero and positive numbers" },
    {
      arr: [-1, 0, 1],
      expected: -1,
      arrDesc: "negative numbers, zero and positive numbers",
    },
    {
      arr: [1],
      expected: 1,
      arrDesc: "only one number",
    },
  ])(
    "determines min is $expected for arrays that contain $arrDesc like $arr",
    ({ arr, expected }) => {
      const stats = calcStats(arr);
      expect(stats.min).toBe(expected);
    }
  );

  test.each([
    { arr: [0, 0], expected: 0, arrDesc: "zeros" },
    { arr: [-2, -1], expected: -1, arrDesc: "negative numbers" },
    { arr: [1, 2], expected: 2, arrDesc: "positive numbers" },
    {
      arr: [-1, 1],
      expected: 1,
      arrDesc: "positive and negative numbers",
    },
    { arr: [-1, 0], expected: 0, arrDesc: "zero and negative numbers" },
    { arr: [0, 1], expected: 1, arrDesc: "zero and positive numbers" },
    {
      arr: [-1, 0, 1],
      expected: 1,
      arrDesc: "negative numbers, zero and positive numbers",
    },
    {
      arr: [1],
      expected: 1,
      arrDesc: "only one number",
    },
  ])(
    "determines max is $expected for arrays that contain $arrDesc like $arr",
    ({ arr, expected }) => {
      const stats = calcStats(arr);
      expect(stats.max).toBe(expected);
    }
  );

  test.each([
    { arr: [0], expected: 1, arrDesc: "one number" },
    { arr: [0, 1], expected: 2, arrDesc: "two numbers" },
    { arr: [0, 1, 2], expected: 3, arrDesc: "three numbers" },
  ])(
    "determines count is $expected for arrays that contain $arrDesc like $arr",
    ({ arr, expected }) => {
      const stats = calcStats(arr);
      expect(stats.count).toBe(expected);
    }
  );
});
