import React from 'react';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { IFilm } from '../../entities';
import { SearchBlock } from '../SearchBlock';
import { SectionSlot } from '../SectionSlot';

type SearchPageProps = {
  films: Array<IFilm>;
  toggler: React.ReactNode;
  searchToggler: React.ReactNode;
  children: React.ReactNode;
  onSelectMovie: (id: number) => void;
  onSearch: (q: string) => void;
};

export function SearchPage({
  films,
  toggler,
  searchToggler,
  children,
  onSelectMovie,
  onSearch,
}: SearchPageProps) {
  return (
    <>
      <SectionSlot>
        <SearchBlock onSearch={onSearch}>{searchToggler}</SearchBlock>
      </SectionSlot>
      <SectionStatus
        status={films.length > 0 && `${films.length} movies found`}
        toggler={toggler}
      />
      <SectionFilms items={films} onSelectFilm={(id: number) => onSelectMovie(id)} />
    </>
  );
}
