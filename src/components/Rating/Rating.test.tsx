import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Rating } from './Rating';

test('render rating element', () => {
  const { container } = render(<Rating value={5} />);

  expect(container).toMatchSnapshot();
});
