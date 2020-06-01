import React from 'react';

import css from './DigitalInfo.scss';

type DigitalInfo = {
  value: string | number;
  unit: string;
};

export function DigitalInfo ({ value, unit }: DigitalInfo) {
  return (
    <div className={css.container}>
      <span>{value}</span>
      <span>{unit}</span>
    </div>
  );
}
