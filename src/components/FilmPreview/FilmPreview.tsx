import React from 'react';

import css from './FilmPreview.scss';

type FilmPreview = {
  img?: string;
  name?: string;
};

export function FilmPreview ({ img, name }: FilmPreview) {
  return (
    <figure className={css.container}>
      {img && <img alt={name} src={img} />}
    </figure>
  );
}
