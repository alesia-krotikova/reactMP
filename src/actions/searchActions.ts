import { IFilm } from '../entities';
import { store } from '../store/configureStore';

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
    film: film,
  };
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

export type SearchActionType = IFetchFilmSuccess | IFetchFilmsSuccess | IFetchFilmsError;

export function fetchFilms(query: string, id?: string) {
  const fetches = [fetch(`https://reactjs-cdp.herokuapp.com/movies?${query}`)];

  id && fetches.push(fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`));

  return (dispatch: any): Promise<any> =>
    Promise.all(fetches).then((results) =>
      results.forEach((res) =>
        res
          .json()
          .then((res) => {
            if (res.error) {
              throw res.error;
            }

            if (res.data) {
              dispatch(fetchFilmsSuccess(res.data));
              return res.data;
            } else {
              dispatch(fetchFilmSuccess(res));
              return res;
            }
          })
          .catch((error) => {
            dispatch(fetchFilmsError(error));
          }),
      ),
    );
}
