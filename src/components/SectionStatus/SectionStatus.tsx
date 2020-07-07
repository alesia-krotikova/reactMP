import React, { useEffect, useState } from 'react';
import { Toggler } from '../Toggler';
import { useHistory, useLocation } from 'react-router';
import qs from 'qs';

import css from './SectionStatus.scss';

type SectionStatusProps = {
  status?: string;
};

export function SectionStatus({ status }: SectionStatusProps) {
  const enum sortParams {
    'release_date',
    'vote_average',
  }
  const enum sortValues {
    'release date',
    'rating',
  }
  const history = useHistory();
  const location = useLocation();
  const [sort, setSort] = useState('release date');

  useEffect(() => {
    const { sortBy } = location.search && qs.parse(location.search);

    // @ts-ignore
    sortBy && setSort(sortValues[sortParams[sortBy]]);
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
            setSort(val); //should implement change url param
          }}
        />
      </div>
    </div>
  );
}
