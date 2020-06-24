import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MovieApp } from './MovieApp';

afterEach(cleanup);

test('display movies on search event', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<MovieApp />);
  const searchBtn = getByText('search');

  fireEvent.click(searchBtn);
  expect(getByText('No films found')).toBeInTheDocument();
  fireEvent.change(getByPlaceholderText('search'), { target: { value: 'q' } });
  fireEvent.click(searchBtn);
  expect(getByTestId('films')).toBeInTheDocument();
});

test('select film with click on one', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<MovieApp />);

  fireEvent.change(getByPlaceholderText('search'), { target: { value: 'q' } });
  fireEvent.click(getByText('search'));
  fireEvent.click(getByTestId('films').firstChild);
  expect(getByTestId('selected film')).toBeInTheDocument();
});

test('initial page on search icon click', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<MovieApp />);

  fireEvent.change(getByPlaceholderText('search'), { target: { value: 'q' } });
  fireEvent.click(getByText('search'));
  fireEvent.click(getByTestId('films').firstChild);
  fireEvent.click(getByTestId('initial search'));
  expect(getByText('No films found')).toBeInTheDocument();
});

test('sort items', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<MovieApp />);

  fireEvent.change(getByPlaceholderText('search'), { target: { value: 'q' } });
  fireEvent.click(getByText('search'));
  const filmName = getByTestId('films').querySelector('h3').innerHTML;
  fireEvent.click(getByText('rating'));
  expect(getByTestId('films').querySelector('h3').innerHTML).not.toBe(filmName);
});
