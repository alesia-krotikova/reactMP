import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DigitalInfo } from './DigitalInfo';

test('render digital info', () => {
  const { container } = render(<DigitalInfo value="154" unit="min" />);

  expect(container).toMatchSnapshot();
});
