import { atom } from "jotai";

const values = atom<Promise<number[]> | undefined>(undefined);

export const asyncValues = atom(
  async (get) => {
    return await get(values);
  },
  (_, set, update: Promise<number[]>) => {
    set(values, update);
  }
);
