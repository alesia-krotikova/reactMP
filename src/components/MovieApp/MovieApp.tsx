import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ErrorBoundary } from '../ErrorBoundary';
import { Toggler } from '../Toggler';
import { MoviePage } from '../MoviePage';
import { SearchPage } from '../SearchPage';
import { IFilm } from '../../entities';

export function MovieApp(props: any) {
  const convertSortVal = (val: string, isStateToView?: boolean) => {
    if (isStateToView) {
      return val === 'release_date' ? 'release date' : 'rating';
    }

    return val === 'release date' ? 'release_date' : 'vote_average';
  };

  const sortToggler = (
    <Toggler
      name="sort by"
      values={['release date', 'rating']}
      active={convertSortVal(props.sortBy, true)}
      onToggle={(val: string) => {
        props.dispatch(props.sortToggler(convertSortVal(val)));
        props.fetchFilms(convertSortVal(val), props.query, props.searchBy, props.film?.genres[0]);
      }}
    />
  );

  const selectMovie = (id: number) => {
    props.dispatch(props.selectFilm(props.films.find((item: IFilm) => item.id === id)));
    props.fetchFilms(props.sortBy, null, null, props.film.genres[0]);
  };

  return (
    <>
      <Header onSwitchPage={() => {}}>
        {!!props.film && (
          <a
            data-testid="initial search"
            onClick={() => {
              props.dispatch(props.selectFilm(null));
            }}
            href="/"
          ></a>
        )}
      </Header>
      <ErrorBoundary>
        {props.film ? (
          <MoviePage
            film={props.film}
            films={props.films}
            toggler={sortToggler}
            onSelectMovie={(id: number) => {
              selectMovie(id);
            }}
          />
        ) : (
          <SearchPage
            films={props.films}
            toggler={sortToggler}
            onSelectMovie={(id: number) => {
              selectMovie(id);
            }}
          />
        )}
      </ErrorBoundary>
      <Footer onSwitchPage={() => {}} />
    </>
  );
}
