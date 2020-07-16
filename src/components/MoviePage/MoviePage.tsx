import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { SectionSlot } from '../SectionSlot';
import { FilmDescription } from '../FilmDescription';
import { SectionStatus } from '../SectionStatus';
import { SectionFilms } from '../SectionFilms';
import { Header } from '../Header';

export function MoviePage({ film, fetchFilms, films }: any) {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetchFilms(location.search, id);
  }, [location]);

  return (
    <>
      <Header>
        <Link data-testid="initial search" to="/" />
      </Header>
      <SectionSlot>{film && <FilmDescription item={film} />}</SectionSlot>
      <SectionStatus status={film?.genres[0] && `Films by ${film.genres[0]} genre`} />
      <SectionFilms items={films} />
    </>
  );
}
