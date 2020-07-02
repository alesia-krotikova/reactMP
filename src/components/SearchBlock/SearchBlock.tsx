import React, { useEffect, useState } from 'react';
import { Search } from '../Search';
import { Toggler } from '../Toggler';
import { useHistory, useLocation } from 'react-router';
import qs from 'qs';

import css from './SearchBlock.scss';

export function SearchBlock() {
  const history = useHistory();
  const location = useLocation();
  const [searchType, setSearchType] = useState('title');

  useEffect(() => {
    const { searchBy } = location.search && qs.parse(location.search);

    searchBy && setSearchType(searchBy as string);
  }, [location]);

  return (
    <div className={css.container}>
      <h1>find your movie</h1>
      <Search
        onSearch={(q: string) => {
          history.push(`/search?${qs.stringify({ search: q, searchBy: searchType })}`);
        }}
      />
      <Toggler
        name="search by"
        values={['title', 'genres']}
        active={searchType}
        onToggle={(val: string) => {
          setSearchType(val);
        }}
      />
    </div>
  );
}
