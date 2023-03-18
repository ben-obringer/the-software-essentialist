export function fizzbuzz(num: number) {
  if (num < 1 || num > 100) {
    throw new Error("number must be in the range [0, 100]");
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return num.toString();
}
