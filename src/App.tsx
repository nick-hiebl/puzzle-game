import React, { useState } from 'react';
import './App.css';

import generateBomb, { Bomb } from 'puzzles/Bomb';
import BombComponent from 'components/bomb/BombComponent';

type Maybe<T> = T | undefined;

const App: React.FC = () => {
  const [seed, setSeed] = useState('');
  const [gameSeed, setGameSeed] = useState('');
  const [bomb, setBomb] = useState(undefined as Maybe<Bomb>);

  const changeSeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeed(e.currentTarget.value);
  };

  const changeGameSeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameSeed(e.currentTarget.value);
  };

  const makeBomb = () => {
    setBomb(generateBomb(seed, gameSeed));
  };

  return (
    <div className="App">
      <div>
        <h1>Bomb game</h1>
        <span>
          Rule seed: <input onChange={changeSeed} value={seed} />
        </span>
        <span>
          Puzzle seed: <input onChange={changeGameSeed} value={gameSeed} />
        </span>
        <button onClick={makeBomb}>Make bomb</button>
      </div>
      { bomb ? (
        <BombComponent bomb={bomb} />
      ) : null }
    </div>
  );
}

export default App;
