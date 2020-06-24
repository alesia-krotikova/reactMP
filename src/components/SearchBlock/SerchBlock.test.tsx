import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchBlock } from './SearchBlock';

test('render search inside search block', () => {
  const mock = <div></div>;
  const { container } = render(<SearchBlock onSearch={jest.fn} children={mock} />);

  expect(container.querySelector('input').getAttribute('type')).toEqual('search');
});
