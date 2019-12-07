import Seed from 'seed-random';

import { Puzzle } from './Puzzle';
import { choose, pickUnique } from './RandomHelpers';

type Button = string;

type ButtonSequence = Button[];

const buttons: Button[] = "abcdefghijklmnopqrstuvwxyz".split("");

export interface ButtonRules {
  sequences: ButtonSequence[];
}

export interface ButtonGame {
  buttons: [Button, Button, Button, Button];
}

const countMatchingSequences = (buttons: Button[], seqs: ButtonSequence[]) => {
  return seqs.filter((seq: ButtonSequence) =>
    buttons.reduce((prev: boolean, curr: Button) =>
      prev && !!seq.find(b => b === curr), true)
  ).length;
}

class ButtonPuzzle extends Puzzle<ButtonRules, ButtonGame, {}, {}> {
  private rules: ButtonRules;
  private game: ButtonGame;
  private state: {};

  constructor(seed: string, gameSeed: string) {
    super(seed, gameSeed);
    this.rules = ButtonPuzzle.makeRules(seed);
    this.game = ButtonPuzzle.makeGame(this.rules, gameSeed);
    this.state = {};
  }

  static makeRules(seed: string) {
    const rand = Seed(seed);
    const sequences: ButtonSequence[] = [];

    for (let i = 0; i < 6; ++i) {
      sequences.push(pickUnique(rand, buttons, 7));
    }

    return { sequences };
  }

  static makeGame({ sequences }: ButtonRules, gameSeed: string) {
    const rand = Seed(gameSeed);

    let buttons: [Button, Button, Button, Button] | undefined = undefined;

    while (!buttons) {
      const sequence = choose(rand, sequences);
      const ops = pickUnique(rand, sequence, 4);
      const [a,b,c,d] = ops;
      buttons = [a,b,c,d];
      if (countMatchingSequences(buttons, sequences) !== 1) {
        buttons = undefined;
      }
    }

    return { buttons };
  }

  getRules() { return this.rules; }
  getGame() { return this.game; }
  getState() { return this.state; }
  updateState(_: {}) {}
}

export default ButtonPuzzle;
