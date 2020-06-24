import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Search } from './Search';

test('change value in search', () => {
  const { getByPlaceholderText } = render(<Search onSearch={jest.fn} />);
  const input = getByPlaceholderText('search');

  fireEvent.change(input, { target: { value: 'q' } });
  expect(input.value).toBe('q');
});

test('btn click fires callback with input value', () => {
  const mockFn = jest.fn();
  const { getByPlaceholderText, getByText } = render(<Search onSearch={mockFn} />);
  const input = getByPlaceholderText('search');
  const button = getByText('search');

  fireEvent.change(input, { target: { value: 'q' } });
  fireEvent.click(button);
  expect(mockFn).toHaveBeenCalledWith('q');
});
