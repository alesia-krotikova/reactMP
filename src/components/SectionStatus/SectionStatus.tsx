import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';
import { Toggler } from '../Toggler';

import css from './SectionStatus.scss';

type SectionStatusProps = {
  status?: string;
};

export function SectionStatus({ status }: SectionStatusProps) {
  const enum SortParams {
    'release_date',
    'vote_average',
  }
  const enum SortValues {
    'release date',
    'rating',
  }
  const location = useLocation();
  const [sort, setSort] = useState('release date');

  useEffect(() => {
    const { sortBy } = location.search && qs.parse(location.search);

    if (sortBy) {
      // @ts-ignore
      setSort(SortValues[SortParams[sortBy]]);
    }
  }, [location]);

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <span data-testid="status">{status}</span>
        <Toggler
          name="sort by"
          values={['release date', 'rating']}
          active={sort}
          onToggle={(val: string) => {
            setSort(val); // should implement change url param
          }}
        />
      </div>
    </div>
  );
}
