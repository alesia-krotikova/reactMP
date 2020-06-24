import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

test('render button with different props', () => {
  const { rerender, container } = render(<Button name="Title" onClick={jest.fn()} />);

  expect(container.textContent).toBe('Title');
  rerender(<Button name="Search" onClick={jest.fn()} />);
  expect(container.textContent).toBe('Search');
});

test('button click fires callback', () => {
  const mockFn = jest.fn();
  const { container } = render(<Button name="Title" onClick={mockFn} />);

  fireEvent.click(container.firstChild);
  expect(mockFn).toHaveBeenCalled();
});
