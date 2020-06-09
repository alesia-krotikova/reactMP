import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FilmDescription } from './FilmDescription';

afterEach(cleanup);

test('render film description', () => {
  const mockItem = {
    id: 1,
    name: 'Kill',
    genre: 'drama',
    year: 1994,
    duration: 153,
    rating: 5,
  };
  const { getByText } = render(<FilmDescription item={mockItem} />);

  expect(getByText('Kill')).toBeInTheDocument();
  expect(getByText('1994')).toBeInTheDocument();
  expect(getByText('153')).toBeInTheDocument();
  expect(getByText('5')).toBeInTheDocument();
});
