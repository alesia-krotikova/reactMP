import React from 'react';
import { FilmPreview } from "../FilmPreview/";
import { Rating } from "../Rating";
import { DigitalInfo } from "../DigitalInfo";

import css from './FilmDescription.scss';

export interface Film {
  id: number;
  name: string;
  preview?: string;
  genre: string;
  year: string | number;
  duration?: string | number;
  description?: string;
  rating?: string | number;
}

type FilmDescription = {
  item: Film;
};

export function FilmDescription ({ item }: FilmDescription) {
  return (
    <article className={css.container}>
      <FilmPreview img={item.preview} name={item.name} />
      <div className={css.description}>
        <h2>{item.name}</h2>
        {item.rating && <Rating value={item.rating}/>}
        <div>
          <DigitalInfo value={item.year} unit="year" />
          {item.duration && <DigitalInfo value={item.duration} unit="min" />}
        </div>
        {item.description && <p>{item.description}</p>}
      </div>
    </article>
  );
}
