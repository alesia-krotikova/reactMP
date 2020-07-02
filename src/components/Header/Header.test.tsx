import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

test('render header with children prop', () => {
  const { container, rerender } = render(<Header />);

  expect(container.querySelectorAll('a')).toHaveLength(1);
  rerender(
    <Header>
      <a href="#">Test</a>
    </Header>,
  );
  expect(container.querySelectorAll('a')).toHaveLength(2);
});
