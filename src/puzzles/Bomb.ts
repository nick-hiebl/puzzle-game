import Seed from 'seed-random';

import { AnyPuzzle } from "components/bomb/AnyPuzzle";
import ButtonPuzzle from "./Buttons";

export interface Bomb {
  puzzles: AnyPuzzle[];
}

const makeBomb = (seed: string, gameSeed: string): Bomb => {
  const puzzles: AnyPuzzle[] = [];
  
  for (let i = 0; i < 3; i++) {
    const key = `${Seed(`${gameSeed}-${i}`)()}`;
    puzzles.push({
      kind: "buttons",
      key,
      puzzle: new ButtonPuzzle(seed, `${gameSeed}-${key}`)
    });
  }

  return { puzzles };
}

export default makeBomb;
