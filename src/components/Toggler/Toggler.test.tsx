import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Toggler } from './Toggler';

afterEach(cleanup);

test('render buttons according to values in toggler component', () => {
  const { container } = render(
    <Toggler onToggle={jest.fn} name="toggler" values={['first', 'second']} active="first" />,
  );

  expect(container.querySelectorAll('button').length).toEqual(2);
});
