/**
 * Takes numbers from 1 to 100 and outputs them as a string, but for multiples
 * of three it returns “Fizz” instead of the number, and for multiples of five
 * it returns “Buzz.” For numbers that are multiples of both three and five, it
 * returns “FizzBuzz.”
 *
 * @example For input [1, 3, 5, 8, 15] the output is ['1', 'Fizz', 'Buzz', '8', 'FizzBuzz']
 */
export function fizzbuzz(num: number): string {
  if (num < 1 || num > 100) {
    throw new Error("number must be in the range [1, 100]");
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
