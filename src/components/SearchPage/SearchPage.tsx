import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { SearchBlock } from '../SearchBlock';
import { SectionSlot } from '../SectionSlot';
import { Header } from '../Header';

export function SearchPage({ films, isDefault, fetchFilms }: any) {
  const location = useLocation();

  useEffect(() => {
    if (!isDefault) {
      fetchFilms(null, location.search);
    }
  }, [location]);

  return (
    <>
      <Header />
      <SectionSlot>
        <SearchBlock />
      </SectionSlot>
      <SectionStatus status={films?.length > 0 && `${films.length} movies found`} />
      <SectionFilms items={films} />
    </>
  );
}
