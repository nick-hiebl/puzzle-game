import React from 'react';

import { Rulebook } from 'puzzles/Rulebook';

interface Props {
  rules: Rulebook;
}

const RulebookComponent = ({ rules }: Props) => {
  return (
    <div>
      <h3>Rules</h3>
      <ul>
        {rules.puzzles.map((puzzle, idx) => (
          <li key={idx}>
            { puzzle.renderRules() }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RulebookComponent;
