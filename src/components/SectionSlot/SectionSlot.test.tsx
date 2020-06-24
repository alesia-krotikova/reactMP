import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SectionSlot } from './SectionSlot';

test('render digital info', () => {
  const { container } = render(<SectionSlot children={'test'} />);

  expect(container).toMatchSnapshot();
});
