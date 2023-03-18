import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("outputs the given number as a string for numbers that are not multiples of 3 or 5 such as 1 and 98", () => {
    expect(fizzbuzz(1)).toEqual("1");
    expect(fizzbuzz(98)).toEqual("98");
  });

  it("outputs 'Fizz' for multiples of 3 such as 3 and 99", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(99)).toEqual("Fizz");
  });

  it("outputs 'Buzz' for multiples of 5 such as 5 and 100", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(100)).toEqual("Buzz");
  });

  it("outputs 'FizzBuzz' for multiples of 3 and 5 such as 15 and 75", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(75)).toEqual("FizzBuzz");
  });

  it("doesn't accent numbers less than 1 such as 0 and -1", () => {
    expect(() => fizzbuzz(0)).toThrow();
    expect(() => fizzbuzz(-1)).toThrow();
  });

  it("doesn't accept numbers greater than 100 such as 101", () => {
    expect(() => fizzbuzz(101)).toThrow();
  });
});
