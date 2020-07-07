import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { SectionSlot } from '../SectionSlot';
import { FilmDescription } from '../FilmDescription';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { Header } from '../Header';

export function MoviePage(props: any) {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    props.fetchFilms(location.search, id);
  }, [location]);

  return (
    <>
      <Header>
        <Link data-testid="initial search" to="/"></Link>
      </Header>
      <SectionSlot>{props.film && <FilmDescription item={props.film} />}</SectionSlot>
      <SectionStatus status={props.film?.genres[0] && `Films by ${props.film.genres[0]} genre`} />
      <SectionFilms items={props.films} />
    </>
  );
}
