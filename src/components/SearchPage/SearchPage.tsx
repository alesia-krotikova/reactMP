import React from 'react';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { IFilm } from '../../entities';
import Search from '../../containers/Search';
import { SectionSlot } from '../SectionSlot';

type SearchPageProps = {
  films: Array<IFilm>;
  toggler: React.ReactNode;
  onSelectMovie: (id: number) => void;
};

export function SearchPage({ films, toggler, onSelectMovie }: SearchPageProps) {
  return (
    <>
      <SectionSlot>
        <Search />
      </SectionSlot>
      <SectionStatus
        status={films?.length > 0 && `${films?.length} movies found`}
        toggler={toggler}
      />
      <SectionFilms items={films} onSelectFilm={(id: number) => onSelectMovie(id)} />
    </>
  );
}
