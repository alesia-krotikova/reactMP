import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SectionFilms } from './SectionFilms';

afterEach(cleanup);

test('section films w/o items', () => {
  const { container } = render(<SectionFilms onSelectFilm={jest.fn} />);

  expect(container.querySelector('h2').innerHTML).toBe('No films found');
});

test('section films with items', () => {
  const mockItems = [
    {
      id: 1,
      name: 'Kill Bill: Vol 1',
      preview: null,
      genre: 'drama',
      year: 1994,
      duration: 153,
      description:
        "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
      rating: 5,
    },
  ];
  const { container } = render(<SectionFilms onSelectFilm={jest.fn} items={mockItems} />);

  expect(container.querySelectorAll('li').length).toEqual(mockItems.length);
});
