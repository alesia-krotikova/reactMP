import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FilmPreview } from './FilmPreview';

afterEach(cleanup);

test('render film preview with different props', () => {
  const { container, rerender } = render(<FilmPreview />);

  expect(container.querySelector('img')).toBeNull();
  rerender(<FilmPreview name="alt test" img="/" />);
  expect(container.querySelector('img').getAttribute('src')).toEqual('/');
  expect(container.querySelector('img').getAttribute('alt')).toEqual('alt test');
});
