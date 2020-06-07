import React from 'react';
import { SectionSlot } from '../SectionSlot';
import { FilmDescription } from '../FilmDescription';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { IFilm } from '../../entities';

type MoviePageProps = {
  film: IFilm;
  films: Array<IFilm>;
  toggler: React.ReactNode;
  onSelectMovie: (id: number) => void;
};

export function MoviePage({ films, film, toggler, onSelectMovie }: MoviePageProps) {
  return (
    <>
      <SectionSlot>
        <FilmDescription item={film} />
      </SectionSlot>
      <SectionStatus status={film.genre && `Films by ${film.genre} genre`} toggler={toggler} />
      <SectionFilms items={films} onSelectFilm={(id: number) => onSelectMovie(id)} />
    </>
  );
}
