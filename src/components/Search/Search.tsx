import React, { useState } from 'react';
import { Button } from '../Button';

import css from './Search.scss';

type SearchProps = {
  onSearch: (val: string) => void;
};

export function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={css.container}>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search"
      />
      <Button name="search" isRed onClick={() => onSearch(searchValue)} />
    </div>
  );
}
