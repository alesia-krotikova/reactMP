import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SectionStatus } from './SectionStatus';

afterEach(cleanup);

test('render status in section status component', () => {
  const mockToggler = <div></div>;
  const { rerender, container } = render(<SectionStatus toggler={mockToggler} />);

  expect(container.querySelector('span').innerHTML).toEqual('');
  rerender(<SectionStatus toggler={mockToggler} status={'test'} />);
  expect(container.querySelector('span').innerHTML).toEqual('test');
});
