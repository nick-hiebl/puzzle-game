import React from 'react';

import Seed from 'seed-random';

import { Puzzle } from 'puzzles/Puzzle';
import { choose, pickUnique } from 'puzzles/RandomHelpers';

import './Buttons.css';

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

class ButtonPuzzle extends Puzzle {
  private rules: ButtonRules;
  private game: ButtonGame;
  private state: {};

  constructor(seed: string, gameSeed: string) {
    super();
    this.rules = this.makeRules(seed);
    this.game = this.makeGame(this.rules, gameSeed);
    this.state = {};
  }

  makeRules(seed: string) {
    const rand = Seed(seed);
    const sequences: ButtonSequence[] = [];

    for (let i = 0; i < 6; ++i) {
      sequences.push(pickUnique(rand, buttons, 7));
    }

    return { sequences };
  }

  makeGame({ sequences }: ButtonRules, gameSeed: string) {
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

  renderGame() {
    const [a,b,c,d] = this.game.buttons;
    return (
      <div className="frame">
        <div className="row">
          <div className="button">{ a }</div>
          <div className="button">{ b }</div>
        </div>
        <div className="row">
          <div className="button">{ c }</div>
          <div className="button">{ d }</div>
        </div>
      </div>
    );
  }

  renderRules() {
    return (
      <div>
        {this.rules.sequences.map(seq => (
          <div>
            {seq.map(btn => (
              <span>{ btn }</span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ButtonPuzzle;
