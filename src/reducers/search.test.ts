import '@testing-library/jest-dom/extend-expect';
import { searchReducer } from './search';
import { IFilm } from '../entities';

type stateType = {
  films: Array<IFilm>;
  error: Error;
};

test('search reducer', () => {
  const initialState: stateType = {
    films: [],
    error: null,
  };

  // @ts-ignore
  expect(searchReducer(undefined, {})).toEqual(initialState);
});
