import React from 'react';

import css from './DigitalInfo.module.scss';

type DigitalInfoProps = {
  value: string | number;
  unit: string;
};

export function DigitalInfo({ value, unit }: DigitalInfoProps) {
  return (
    <div className={css.container}>
      <span>{value}</span>
      <span>{unit}</span>
    </div>
  );
}
