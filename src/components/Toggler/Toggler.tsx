import React from 'react';
import { Button } from '../Button/';

import css from './Toggler.module.scss';

type TogglerProps = {
  name: string;
  active: string;
  values: Array<string>;
  onToggle: (name: string) => void;
};

export function Toggler({ onToggle, name, values, active }: TogglerProps) {
  const lastIndex = values.length - 1;

  return (
    <div className={css.container}>
      <span>{name}</span>
      {values.map((val, i) => (
        <Button
          name={val}
          key={val}
          selected={active === val}
          isLeft={i === 0}
          isRight={i === lastIndex}
          isBetween={i > 0 && i < lastIndex}
          onClick={() => onToggle(val)}
        />
      ))}
    </div>
  );
}
