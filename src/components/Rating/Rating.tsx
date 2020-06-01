import React from 'react';

import css from './Rating.scss';

type Rating = {
  value: string | number;
};

export function Rating ({ value }: Rating) {
  return <span className={css.container}>{value}</span>;
}
