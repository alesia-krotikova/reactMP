import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

test('render footer', () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
