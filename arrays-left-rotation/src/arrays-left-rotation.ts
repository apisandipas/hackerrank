export default function rotLeft(a: number[], d: number): number[] {
  for (let i = 0; i < d; i++) {
    a.push(a.shift());
  }

  return a;
}
