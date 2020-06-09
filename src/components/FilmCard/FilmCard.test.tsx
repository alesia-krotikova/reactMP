import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FilmCard } from './FilmCard';

afterEach(cleanup);

test('render digital info', () => {
  const { container } = render(
    <FilmCard id={2} preview="#" genre="drama" year="2020" name="test" />,
  );

  expect(container).toMatchSnapshot();
});
