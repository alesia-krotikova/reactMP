import React from 'react';
import { IFilm } from '../../entities';
import { FilmPreview } from '../FilmPreview';

import css from './FilmCard.scss';

export function FilmCard({
  poster_path, title, genres, release_date,
}: IFilm) {
  return (
    <article className={css.container}>
      <FilmPreview img={poster_path} name={title} />
      <div className={css.heading}>
        <h3>{title}</h3>
        <span>{release_date}</span>
      </div>
      <span>{genres}</span>
    </article>
  );
}
