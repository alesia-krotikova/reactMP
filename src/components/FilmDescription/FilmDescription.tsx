import React from 'react';
import { FilmPreview } from '../FilmPreview/';
import { Rating } from '../Rating';
import { DigitalInfo } from '../DigitalInfo';
import { IFilm } from '../../entities';

import css from './FilmDescription.scss';

type FilmDescriptionProps = {
  item: IFilm;
};

export function FilmDescription({ item }: FilmDescriptionProps) {
  return (
    <article data-testid="selected film" className={css.container}>
      <FilmPreview img={item.preview} name={item.name} />
      <div className={css.description}>
        <h2>{item.name}</h2>
        {item.rating && <Rating value={item.rating} />}
        <div>
          <DigitalInfo value={item.year} unit="year" />
          {item.duration && <DigitalInfo value={item.duration} unit="min" />}
        </div>
        {item.description && <p>{item.description}</p>}
      </div>
    </article>
  );
}
