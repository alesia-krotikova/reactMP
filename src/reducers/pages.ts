import { SELECT_FILM, SEARCH_QUERY, PageActionType } from '../actions/pageActions';
import { IFilm } from '../entities';

type stateType = {
  activeFilm: IFilm;
  query: string;
};

const initialState: stateType = {
  activeFilm: null,
  query: '',
};

export function pageReducer(state = initialState, action: PageActionType) {
  switch (action.type) {
    case SELECT_FILM:
      return {
        ...state,
        activeFilm: action.film,
        query: '',
      };
    case SEARCH_QUERY:
      return {
        ...state,
        query: action.q,
        activeFilm: null,
      };
    default:
      return state;
  }
}

export const getFilm = (state: stateType) => state.activeFilm;
export const getQuery = (state: stateType) => state.query;
