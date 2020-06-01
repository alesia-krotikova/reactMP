import React from 'react';

import css from './SearchBlock.scss';
import {Search} from "../Search";

type SearchBlock = {
  searchClick: (val: string) => void;
  children: React.ReactNode;
};

export function SearchBlock ({ searchClick, children }: SearchBlock) {
  return (
    <div className={css.container}>
      <h1>find your movie</h1>
      <Search click={searchClick} />
      {children}
    </div>
  );
}
