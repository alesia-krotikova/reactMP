import React from 'react';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { IFilm } from '../../entities';

type SearchPageProps = {
  films: Array<IFilm>;
  toggler: React.ReactNode;
  children: React.ReactNode;
  onSelectMovie: (id: number) => void;
};

export function SearchPage({ films, toggler, children, onSelectMovie }: SearchPageProps) {
  return (
    <>
      {children}
      <SectionStatus
        status={films.length > 0 && `${films.length} movies found`}
        toggler={toggler}
      />
      <SectionFilms items={films} onSelectFilm={(id: number) => onSelectMovie(id)} />
    </>
  );
}
