import React from 'react';

import { Button } from './Buttons';

import './Buttons.css';

interface Props {
  button: Button;
  onClick: () => void;
  pressed: boolean;
}

const SingleButton = ({ button, onClick, pressed}: Props) => {
  const css = pressed
    ? "button button-disabled"
    : "button button-enabled";
  return (
    <button
      className={css}
      onClick={onClick}
      disabled={pressed}
    >
      { button }
    </button>
  );
}

export default SingleButton;
