interface Stats {
  max: number;
  min: number;
}

export function calcStats(arr: number[]): Stats {
  if (arr.length === 0) {
    throw new Error("input must not be empty");
  }

  let min = arr[0];
  let max = arr[0];
  for (const int of arr) {
    if (int < min) {
      min = int;
    }
    if (int > max) {
      max = int;
    }
  }

  return {
    max,
    min,
  };
}
