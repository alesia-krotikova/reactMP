import React, {useState} from 'react';
import { Button } from "../Button/";

import css from './Search.scss';

type Search = {
  click: (val: string) => void;
};

export function Search ({ click }: Search) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={css.container}>
      <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="search" />
      <Button name={"search"} isRed={true} click={() => click(searchValue) } />
    </div>
  );
}
