import React from 'react';
import { FilmCard } from '../FilmCard';
import { IFilm } from '../../entities';
import qs from 'qs';
import { useHistory } from 'react-router';

import css from './SectionFilms.scss';

type SectionFilmsProps = {
  items?: Array<IFilm>;
};

export function SectionFilms({ items }: SectionFilmsProps) {
  const history = useHistory();

  return (
    <section className={css.container}>
      <div className={css.wrap}>
        {items?.length ? (
          <ul data-testid="films">
            {items.map((item) => (
              <li
                onClick={() =>
                  history.push(`/film/${item.id}?${qs.stringify({ filter: item.genres[0] })}`)
                }
              >
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
