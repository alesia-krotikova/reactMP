import {
  FETCH_FILMS_SUCCESS,
  FETCH_FILM_SUCCESS,
  FETCH_FILMS_ERROR,
  SearchActionType,
} from '../actions/searchActions';
import { IFilm } from '../entities';

type StateType = {
  films: Array<IFilm>;
  film: IFilm;
  error: Error;
};

const initialState: StateType = {
  films: [],
  film: null,
  error: null,
};

export function searchReducer(state = initialState, action: SearchActionType) {
  switch (action.type) {
    case FETCH_FILM_SUCCESS:
      return {
        ...state,
        film: action.film,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        films: action.films,
      };
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getFilms = (state: StateType) => state.films;
export const getFilm = (state: StateType) => state.film;
export const getFilmsError = (state: StateType) => state.error;
