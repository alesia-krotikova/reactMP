import React from 'react';
import { Film } from "../FilmDescription";
import { FilmPreview } from "../FilmPreview";

import css from './FilmCard.scss';

export function FilmCard ({ preview, name, genre, year }: Film) {
  return (
    <article className={css.container}>
      <FilmPreview img={preview} name={name} />
      <div className={css.heading}>
        <h3>{name}</h3>
        <span>{year}</span>
      </div>
      <span>{genre}</span>
    </article>
  );
}
