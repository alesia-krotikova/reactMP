import React from 'react';
import { FilmCard } from '../FilmCard';
import { IFilm } from '../../entities';
import qs from 'qs';
import { useRouter } from 'next/router';

import css from './SectionFilms.module.scss';

type SectionFilmsProps = {
  items?: Array<IFilm>;
};

export function SectionFilms({ items }: SectionFilmsProps) {
  const router = useRouter();

  return (
    <section className={css.container}>
      <div className={css.wrap}>
        {items?.length ? (
          <ul data-testid="films">
            {items.map((item) => (
              <li
                onClick={() =>
                  router.push(`/film/${item.id}?${qs.stringify({ filter: item.genres[0] })}`)
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
