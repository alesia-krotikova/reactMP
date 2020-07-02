import '@testing-library/jest-dom/extend-expect';
import { togglerReducer } from './toggler';

type stateType = {
  sortBy: string;
  searchBy: string;
};

test('toggler reducer', () => {
  const initialState: stateType = {
    sortBy: 'release_date',
    searchBy: 'title',
  };

  expect(togglerReducer(undefined, { type: 'SORT_TOGGLER', payload: 'genre' })).toEqual({
    sortBy: 'genre',
    searchBy: 'title',
  });
});
