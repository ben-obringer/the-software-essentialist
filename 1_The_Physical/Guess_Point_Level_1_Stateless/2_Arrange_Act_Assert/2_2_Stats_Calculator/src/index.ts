interface Stats {
  min: number | null;
}

export function calcStats(seq: number[]): Stats {
  let min = null;
  for (const int of seq) {
    if (min === null || int < min) {
      min = int;
    }
  }

  return {
    min,
  };
}
