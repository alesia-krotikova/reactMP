import { IFilm } from '../entities';

export const SELECT_FILM = 'SELECT_FILM';
export const SEARCH_QUERY = 'SEARCH_QUERY';

interface ISelectFilm {
  type: typeof SELECT_FILM;
  film: IFilm;
}

interface ISearchQuery {
  type: typeof SEARCH_QUERY;
  q: string;
}

export function selectFilm(film: IFilm) {
  return {
    type: SELECT_FILM,
    film: film,
  };
}

export function searchQuery(q: string) {
  return {
    type: SEARCH_QUERY,
    q: q,
  };
}

export type PageActionType = ISearchQuery | ISelectFilm;
