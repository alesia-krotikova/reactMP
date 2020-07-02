import { FETCH_FILMS_SUCCESS, FETCH_FILMS_ERROR, SearchActionType } from '../actions/searchActions';
import { IFilm } from '../entities';

type stateType = {
  films: Array<IFilm>;
  error: Error;
};

const initialState: stateType = {
  films: [],
  error: null,
};

export function searchReducer(state = initialState, action: SearchActionType) {
  switch (action.type) {
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

export const getFilms = (state: stateType) => state.films;
export const getFilmsError = (state: stateType) => state.error;
