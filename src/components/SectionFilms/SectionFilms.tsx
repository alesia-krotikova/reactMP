import React from 'react';

import css from './SectionFilms.scss';
import { FilmCard } from '../FilmCard';
import { IFilm } from '../../entities';

type SectionFilmsProps = {
  onSelectFilm: (item: number) => void;
  items?: Array<IFilm>;
};

export function SectionFilms({ items, onSelectFilm }: SectionFilmsProps) {
  return (
    <section className={css.container}>
      <div className={css.wrap}>
        {items?.length ? (
          <ul data-testid="films">
            {items.map((item) => (
              <li onClick={() => onSelectFilm(item.id)} key={item.id}>
                <FilmCard {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <h2>No films found</h2>
        )}
      </div>
    </section>
  );
}
