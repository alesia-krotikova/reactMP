import React from 'react';
import { FilmPreview } from '../FilmPreview/';
import { Rating } from '../Rating';
import { DigitalInfo } from '../DigitalInfo';
import { IFilm } from '../../entities';

import css from './FilmDescription.module.scss';

type FilmDescriptionProps = {
  item: IFilm;
};

export function FilmDescription({ item }: FilmDescriptionProps) {
  return (
    <article data-testid="selected film" className={css.container}>
      <FilmPreview img={item.poster_path} name={item.title} />
      <div className={css.description}>
        <h2>{item.title}</h2>
        <Rating value={item.vote_average} />
        <div>
          <DigitalInfo value={item.release_date} unit="year" />
          <DigitalInfo value={item.runtime} unit="min" />
        </div>
        {item.overview && <p>{item.overview}</p>}
      </div>
    </article>
  );
}
