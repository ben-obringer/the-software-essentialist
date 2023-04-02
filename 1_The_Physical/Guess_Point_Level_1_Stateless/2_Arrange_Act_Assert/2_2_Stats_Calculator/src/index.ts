interface Stats {
  min: number;
}

export function calcStats(seq: number[]): Stats {
  if (seq.length === 0) {
    throw new Error("input must not be empty");
  }

  let min = seq[0];
  for (const int of seq) {
    if (int < min) {
      min = int;
    }
  }

  return {
    min,
  };
}
