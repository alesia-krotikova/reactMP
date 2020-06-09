import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from './Footer';

afterEach(cleanup);

test('render footer', () => {
  const { container } = render(<Footer onSwitchPage={jest.fn} />);

  expect(container).toMatchSnapshot();
});
