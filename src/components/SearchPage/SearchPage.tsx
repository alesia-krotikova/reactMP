import React, { useEffect } from 'react';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { SearchBlock } from '../SearchBlock';
import { SectionSlot } from '../SectionSlot';
import { Header } from '../Header';
import { useLocation } from 'react-router';

export function SearchPage(props: any) {
  const location = useLocation();

  useEffect(() => {
    !props.isDefault && props.fetchFilms(null, location.search);
  }, [location]);

  return (
    <>
      <Header />
      <SectionSlot>
        <SearchBlock />
      </SectionSlot>
      <SectionStatus status={props.films?.length > 0 && `${props.films.length} movies found`} />
      <SectionFilms items={props.films} />
    </>
  );
}
