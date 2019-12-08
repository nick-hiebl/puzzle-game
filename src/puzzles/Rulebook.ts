import { Puzzle } from "./Puzzle";
import ButtonPuzzle from "components/games/buttons/Buttons";

export interface Rulebook {
  puzzles: Puzzle[];
}

const makeRulebook = (seed: string): Rulebook => {
  const puzzles: Puzzle[] = [];

  puzzles.push(new ButtonPuzzle(seed, ''));

  return { puzzles };
}

export default makeRulebook;
