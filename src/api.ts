async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function download(): Promise<number[]> {
  await sleep(1000);
  const ret: number[] = [];
  for (let i = 0; i < 10; i++) {
    ret.push(Math.random());
  }
  return ret;
}
