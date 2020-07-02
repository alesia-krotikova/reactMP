import '@testing-library/jest-dom/extend-expect';
import { pageReducer } from './pages';
import { IFilm } from '../entities';

type stateType = {
  activeFilm: IFilm;
  query: string;
};

test('pages reducer', () => {
  const initialState: stateType = {
    activeFilm: null,
    query: '',
  };

  expect(pageReducer(undefined, { type: 'SEARCH_QUERY', q: 'test' })).toEqual({
    activeFilm: null,
    query: 'test',
  });
});
