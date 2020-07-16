import '@testing-library/jest-dom/extend-expect';
import { IFilm } from '../entities';
import { FETCH_FILMS_SUCCESS, fetchFilmsSuccess } from './searchActions';

test('search action', () => {
  const films: Array<IFilm> = [
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

  expect(fetchFilmsSuccess(films)).toEqual({
    type: FETCH_FILMS_SUCCESS,
    films,
  });
});
