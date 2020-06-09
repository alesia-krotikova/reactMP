import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logo } from './Logo';

afterEach(cleanup);

test('render logo', () => {
  const { container } = render(<Logo onClick={jest.fn} />);

  expect(container).toMatchSnapshot();
});
