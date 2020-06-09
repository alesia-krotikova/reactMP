import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from './Header';

afterEach(cleanup);

test('render header with children prop', () => {
  const { container, rerender } = render(<Header onSwitchPage={jest.fn} />);

  expect(container.querySelectorAll('a')).toHaveLength(1);
  rerender(
    <Header onSwitchPage={jest.fn}>
      <a href="#">Test</a>
    </Header>,
  );
  expect(container.querySelectorAll('a')).toHaveLength(2);
});
