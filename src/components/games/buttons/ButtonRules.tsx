import React from 'react';

import { ButtonRules } from './Buttons';

interface Props {
  rules: ButtonRules;
}

const Rules = ({ rules }: Props) => {
  return (
    <div>
      {rules.sequences.map(seq => (
        <div>
          {seq.map(btn => (
            <span>{ btn }</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Rules;
