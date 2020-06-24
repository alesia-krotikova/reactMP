import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Logo } from './Logo';

test('render logo', () => {
  const { container } = render(<Logo onClick={jest.fn} />);

  expect(container).toMatchSnapshot();
});
