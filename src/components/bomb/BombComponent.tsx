import React from 'react';

import { Bomb } from 'puzzles/Bomb';

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
        {bomb.puzzles.map((puzzle, idx) => (
          <li key={idx}>
            { puzzle.renderGame() }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BombComponent;
