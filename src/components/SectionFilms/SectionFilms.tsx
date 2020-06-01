import React from 'react';

import css from './SectionFilms.scss';
import { FilmCard } from "../FilmCard";
import { Film } from "../FilmDescription";

type SectionFilms = {
  click: (item: number) => void;
  items?: Array<Film>;
}

export function SectionFilms ({ items, click }: SectionFilms) {
  return (
    <section className={css.container}>
      <div className={css.wrap}>
        {items.length
          ? <ul>{items.map((item) => (<li onClick={() => click(item.id)} key={item.id}><FilmCard {...item} /></li>))}</ul>
          : <h2>No films found</h2>
        }
      </div>
    </section>
  );
}
