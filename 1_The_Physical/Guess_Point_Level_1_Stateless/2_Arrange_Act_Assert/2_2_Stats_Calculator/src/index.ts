interface Stats {
  min: number;
}

export function calcStats(seq: number[]): Stats {
  return {
    min: seq[0],
  };
}
