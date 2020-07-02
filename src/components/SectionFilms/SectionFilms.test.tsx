import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SectionFilms } from './SectionFilms';

test('section films w/o items', () => {
  const { container } = render(<SectionFilms />);

  expect(container.querySelector('h2').innerHTML).toBe('No films found');
});

test('section films with items', () => {
  const mockItems = [
    {
      id: 1,
      title: 'Kill Bill: Vol 1',
      poster_path: '',
      genres: ['drama'],
      release_date: '1994',
      runtime: 153,
      overview:
        "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
      vote_average: 5,
    },
  ];
  const { container } = render(<SectionFilms items={mockItems} />);

  expect(container.querySelectorAll('li').length).toEqual(mockItems.length);
});
