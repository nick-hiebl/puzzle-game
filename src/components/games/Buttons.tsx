import React from 'react';

import ButtonsPuzzle from 'puzzles/Buttons';

import './Buttons.css';

interface Props {
  puzzle: ButtonsPuzzle;
}

const GameComponent = ({ puzzle }: Props) => {
  const [a,b,c,d] = puzzle.getGame().buttons;
  return (
    <div className="frame">
      <div className="row">
        <div className="button">{a}</div>
        <div className="button">{b}</div>
      </div>
      <div className="row">
        <div className="button">{c}</div>
        <div className="button">{d}</div>
      </div>
    </div>
  );
}

export default GameComponent;
