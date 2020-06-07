import React, { useState } from 'react';
import { Header } from '../Header';
import { SectionSlot } from '../SectionSlot';
import { SearchBlock } from '../SearchBlock';
import { Footer } from '../Footer';
import { ErrorBoundary } from '../ErrorBoundary';
import { Toggler } from '../Toggler';
import { IFilm } from '../../entities';
import { MoviePage } from '../MoviePage';
import { SearchPage } from '../SearchPage';

// mock data
const items: Array<IFilm> = [
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
  {
    id: 234,
    name: 'Kill Bill: Vol 2',
    preview: 'https://picsum.photos/id/1028/600/700',
    genre: 'drama',
    year: 2018,
    duration: 153,
    description:
      "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    rating: 4.3,
  },
  {
    id: 10,
    name: 'Kill Bill: Vol 4',
    preview: 'https://picsum.photos/id/1028/600/700',
    genre: 'drama',
    year: 2017,
    duration: 153,
    description:
      "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    rating: 5,
  },
  {
    id: 167,
    name: 'Kill Bill: Vol 3',
    preview: 'https://picsum.photos/id/1028/600/700',
    genre: 'drama',
    year: 2005,
    duration: 153,
    description:
      "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
    rating: 4.8,
  },
];

export function MovieApp() {
  const [searchType, setSearchType] = useState('title');
  const [sort, setSort] = useState('release date');
  const [activeCard, setActiveCard] = useState(null);
  const [films, setFilms] = useState([]);

  const sortItems = (val: string) => {
    const sort = val === 'rating' ? val : 'year';
    setSort(val);

    const sortedFilms = films.slice().sort((first, next) => {
      if (first[sort] > next[sort]) {
        return -1;
      }
      if (first[sort] < next[sort]) {
        return 1;
      }

      return 0;
    });

    setFilms(sortedFilms);
  };

  const search = (q: string) => {
    // mock data as got search results
    if (q) {
      setFilms(searchType === 'title' ? items.slice(0, 3) : items.slice(3));
    } else {
      setFilms([]);
    }
  };

  const revertInitialState = () => {
    // temporary set initial state of app;
    setSearchType('title');
    setFilms([]);
    setSort('release date');
    setActiveCard(null);
  };

  const sortToggler = (
    <Toggler
      name="sort by"
      values={['release date', 'rating']}
      active={sort}
      onToggle={sortItems}
    />
  );

  return (
    <>
      <Header onSwitchPage={revertInitialState}>
        {!!activeCard && <a onClick={revertInitialState} href="/"></a>}
      </Header>
      <ErrorBoundary>
        {activeCard ? (
          <MoviePage
            film={activeCard}
            films={films}
            toggler={sortToggler}
            onSelectMovie={(id: number) => setActiveCard(films.find((item) => item.id === id))}
          />
        ) : (
          <SearchPage
            films={films}
            toggler={sortToggler}
            onSearch={search}
            onSelectMovie={(id: number) => setActiveCard(films.find((item) => item.id === id))}
            searchToggler={
              <Toggler
                name="search by"
                values={['title', 'genre']}
                active={searchType}
                onToggle={(val) => setSearchType(val)}
              />
            }
          >
            <SectionSlot>
              <SearchBlock onSearch={search}>
                <Toggler
                  name="search by"
                  values={['title', 'genre']}
                  active={searchType}
                  onToggle={(val) => setSearchType(val)}
                />
              </SearchBlock>
            </SectionSlot>
          </SearchPage>
        )}
      </ErrorBoundary>
      <Footer onSwitchPage={revertInitialState} />
    </>
  );
}
