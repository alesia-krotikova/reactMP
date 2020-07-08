import React, { useEffect } from 'react';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { SearchBlock } from '../SearchBlock';
import { SectionSlot } from '../SectionSlot';
import { Header } from '../Header';
import { useRouter } from 'next/router';
import qs from 'qs';

export function SearchPage(props: any) {
  const router = useRouter();

  useEffect(() => {
    router.pathname !== '/' && props.fetchFilms(qs.stringify(router.query));
  }, []);

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
