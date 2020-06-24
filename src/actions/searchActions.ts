import { IFilm } from '../entities';
import { store } from '../store/configureStore';

export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR';

interface IFetchFilmsSuccess {
  type: typeof FETCH_FILMS_SUCCESS;
  films: Array<IFilm>;
}

interface IFetchFilmsError {
  type: typeof FETCH_FILMS_ERROR;
  error: Error;
}

export function fetchFilmsSuccess(films: Array<IFilm>) {
  return {
    type: FETCH_FILMS_SUCCESS,
    films: films,
  };
}

export function fetchFilmsError(error: Error) {
  return {
    type: FETCH_FILMS_ERROR,
    error: error,
  };
}

export type SearchActionType = IFetchFilmsSuccess | IFetchFilmsError;

export function fetchFilms(sort: string, q: string, searchBy: string, genre: string) {
  const query = q ? `search=${q}&searchBy=${searchBy}` : `filter=${genre}`;

  return (dispatch: typeof store.dispatch) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?${query}&sortBy=${sort}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchFilmsSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchFilmsError(error));
      });
  };
}
