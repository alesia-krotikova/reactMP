import React from 'react';
import { Button } from "../Button/";

import css from './Toggler.scss';

interface Toggler {
  name: string;
  active: string;
  values: Array<string>;
  click: (name: string) => void;
}

export function Toggler ({ click, name, values, active }: Toggler) {
  return (
    <div className={css.container}>
      <span>{name}</span>
      {values.map((val, i) => (
        <Button
          name={val}
          key={val}
          selected={active === val}
          isLeft={i === 0}
          isRight={i === 1}
          click={() => click(val) } />
        )
      )}
    </div>
  );
}
