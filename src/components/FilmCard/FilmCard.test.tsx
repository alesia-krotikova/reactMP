import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FilmCard } from './FilmCard';

test('render digital info', () => {
  const { container } = render(
    <FilmCard id={2} preview="#" genre="drama" year="2020" name="test" />,
  );

  expect(container).toMatchSnapshot();
});
