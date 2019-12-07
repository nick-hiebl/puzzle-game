import React from 'react';

import { Bomb } from 'puzzles/Bomb';

import AnyPuzzle from './AnyPuzzle';

interface Props {
  bomb: Bomb;
}

const BombComponent = ({ bomb }: Props) => {
  return (
    <div>
      <h3>
        The bomb:
      </h3>
      <ul>
        {bomb.puzzles.map((puzz, idx) => (
          <li key={idx}>
            <AnyPuzzle {...puzz} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BombComponent;
