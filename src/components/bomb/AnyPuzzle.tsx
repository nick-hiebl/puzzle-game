import React from 'react';

import ButtonGame from 'components/games/Buttons';
import ButtonPuzzle from "puzzles/Buttons";

export type AnyPuzzle = (
    { kind: "buttons"; puzzle: ButtonPuzzle }
  | { kind: "?"; puzzle: null }
) & { key: string };

const IndividualPuzzle = (game: AnyPuzzle) => {
  switch (game.kind) {
    case "buttons":
      return <ButtonGame puzzle={game.puzzle} />;
    case "?":
      return <div>No.</div>;
  }
}

export default IndividualPuzzle;
