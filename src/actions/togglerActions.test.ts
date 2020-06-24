import '@testing-library/jest-dom/extend-expect';
import { SORT_TOGGLER, sortToggler } from './togglerActions';

test('toggler action', () => {
  expect(sortToggler('test toggler')).toEqual({
    type: SORT_TOGGLER,
    payload: 'test toggler',
  });
});
