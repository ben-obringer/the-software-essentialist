interface Stats {
  average: number;
  count: number;
  max: number;
  min: number;
}

export function calcStats(arr: number[]): Stats {
  if (arr.length === 0) {
    throw new Error("input must not be empty");
  }

  let count = 0;
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (const int of arr) {
    count += 1;
    if (int < min) {
      min = int;
    }
    if (int > max) {
      max = int;
    }
    sum += int;
  }

  return {
    average: sum / count,
    count,
    max,
    min,
  };
}
