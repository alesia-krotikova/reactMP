import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FilmCard } from './FilmCard';

test('render digital info', () => {
  const { container } = render(
    <FilmCard id={2} poster_path="#" genres={['drama']} release_date="2020" title="test" />,
  );

  expect(container).toMatchSnapshot();
});
