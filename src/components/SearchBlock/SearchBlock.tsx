import React from 'react';
import { Search } from '../Search';
import { Toggler } from '../Toggler';

import css from './SearchBlock.scss';

export function SearchBlock(props: any) {
  const search = (q: string) => {
    props.dispatch(props.searchQuery(q));
    props.fetchFilms(props.sortBy, q, props.searchBy);
  };

  return (
    <div className={css.container}>
      <h1>find your movie</h1>
      <Search
        onSearch={(q: string) => {
          search(q);
        }}
      />
      <Toggler
        name="search by"
        values={['title', 'genres']}
        active={props.searchBy}
        onToggle={(val: string) => {
          props.dispatch(props.searchToggler(val));
        }}
      />
    </div>
  );
}
