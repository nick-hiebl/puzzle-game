import Seed from 'seed-random';

import { Puzzle } from 'puzzles/Puzzle';
import ButtonPuzzle from "components/games/buttons/Buttons";

export interface Bomb {
  puzzles: Puzzle[];
}

const makeBomb = (seed: string, gameSeed: string): Bomb => {
  const puzzles: Puzzle[] = [];
  
  for (let i = 0; i < 3; i++) {
    const key = `${Seed(`${gameSeed}-${i}`)()}`;
    puzzles.push(new ButtonPuzzle(seed, `${gameSeed}-${key}`));
  }

  return { puzzles };
}

export default makeBomb;
