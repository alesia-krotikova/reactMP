import React, { useEffect, useState } from 'react';
import { Search } from '../Search';
import { Toggler } from '../Toggler';
import { useRouter } from 'next/router';
import qs from 'qs';

import css from './SearchBlock.module.scss';

export function SearchBlock() {
  const router = useRouter();
  const [searchType, setSearchType] = useState('title');

  useEffect(() => {
    const searchBy = router.query.searchBy;

    searchBy && setSearchType(searchBy as string);
  }, [router]);

  return (
    <div className={css.container}>
      <h1>find your movie</h1>
      <Search
        onSearch={(q: string) => {
          router.push(`/search?${qs.stringify({ search: q, searchBy: searchType })}`);
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
