import React from 'react';

import css from './Rating.scss';

type RatingProps = {
  value: string | number;
};

export function Rating({ value }: RatingProps) {
  return <span className={css.container}>{value}</span>;
}
