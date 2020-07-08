import React from 'react';

import cx from 'classnames';
import css from './FilmPreview.module.scss';

type FilmPreviewProps = {
  img?: string;
  name?: string;
};

export function FilmPreview({ img, name }: FilmPreviewProps) {
  return (
    <figure className={cx(css.container, { [css.default]: !img })}>
      {img && <img alt={name} src={img} />}
    </figure>
  );
}
