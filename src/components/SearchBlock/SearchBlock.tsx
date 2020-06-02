import React from 'react';

import css from './SearchBlock.scss';
import { Search } from '../Search';

type SearchBlockProps = {
  onSearch: (val: string) => void;
  children: React.ReactNode;
};

export function SearchBlock({ onSearch, children }: SearchBlockProps) {
  return (
    <div className={css.container}>
      <h1>find your movie</h1>
      <Search onSearch={onSearch} />
      {children}
    </div>
  );
}
