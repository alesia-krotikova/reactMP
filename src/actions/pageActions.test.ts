import '@testing-library/jest-dom/extend-expect';
import { searchQuery } from './pageActions';

test('page action', () => {
  expect(searchQuery('test query')).toEqual({
    type: 'SEARCH_QUERY',
    q: 'test query',
  });
});
