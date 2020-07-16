import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SectionStatus } from './SectionStatus';

test('render status in section status component', () => {
  const { rerender, container } = render(<SectionStatus />);

  expect(container.querySelector('span').innerHTML).toEqual('');
  rerender(<SectionStatus status="test" />);
  expect(container.querySelector('span').innerHTML).toEqual('test');
});
