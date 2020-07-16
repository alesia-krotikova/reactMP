import { IFilm } from '../entities';

export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';

interface IFetchFilmsSuccess {
  type: typeof FETCH_FILMS_SUCCESS;
  films: Array<IFilm>;
}

interface IFetchFilmSuccess {
  type: typeof FETCH_FILM_SUCCESS;
  film: IFilm;
}

interface IFetchFilmsError {
  type: typeof FETCH_FILMS_ERROR;
  error: Error;
}

export function fetchFilmSuccess(film: IFilm) {
  return {
    type: FETCH_FILM_SUCCESS,
    film,
  };
}

export function fetchFilmsSuccess(films: Array<IFilm>) {
  return {
    type: FETCH_FILMS_SUCCESS,
    films,
  };
}

export function fetchFilmsError(error: Error) {
  return {
    type: FETCH_FILMS_ERROR,
    error,
  };
}

export type SearchActionType = IFetchFilmSuccess | IFetchFilmsSuccess | IFetchFilmsError;

export function fetchFilms(query: string, id: string) {
  const fetches = [
    fetch(`https://reactjs-cdp.herokuapp.com/movies${query}`),
    id && fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`),
  ];

  return (dispatch: any) => {
    Promise.all(fetches).then((results) => results.forEach((result) => result
      .json()
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        if (res.data) {
          dispatch(fetchFilmsSuccess(res.data));
          return res.data;
        }
        dispatch(fetchFilmSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchFilmsError(error));
      })));
  };
}
