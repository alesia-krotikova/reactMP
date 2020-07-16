import React from 'react';
import { IFilm } from '../../entities';
import { FilmPreview } from '../FilmPreview';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '325px',
    cursor: 'pointer'
  },
  heading: {
    paddingTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& h3': {
      margin: 0
    },
    '& span': {
      display: 'block',
      padding: '2px 10px',
      border: '1px solid',
      borderRadius: '3px',
    }
  }
});
// import css from './FilmCard.scss';

export function FilmCard({
  poster_path, title, genres, release_date,
}: IFilm) {
  const css = useStyles();

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
