import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SectionSlot } from '../SectionSlot';
import { FilmDescription } from '../FilmDescription';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { Header } from '../Header';
import qs from 'qs';

export function MoviePage(props: any) {
  const router = useRouter();

  // useEffect(() => {
  //   props.fetchFilms(qs.stringify(router.query), router.query.id);
  // }, [router]);

  return (
    <>
      <Header>
        <Link href="/">
          <i></i>
        </Link>
      </Header>
      <SectionSlot>{props.film && <FilmDescription item={props.film} />}</SectionSlot>
      <SectionStatus status={props.film?.genres && `Films by ${props.film.genres[0]} genre`} />
      <SectionFilms items={props.films} />
    </>
  );
}
