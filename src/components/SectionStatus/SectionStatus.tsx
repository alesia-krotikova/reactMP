import React, { useEffect, useState } from 'react';
import { Toggler } from '../Toggler';
import { useRouter } from 'next/router';
import qs from 'qs';

import css from './SectionStatus.module.scss';

type SectionStatusProps = {
  status?: string;
};

export function SectionStatus({ status }: SectionStatusProps) {
  enum sortParams {
    'release_date',
    'vote_average',
  }
  enum sortValues {
    'release date',
    'rating',
  }

  const router = useRouter();
  const [sort, setSort] = useState('release date');

  useEffect(() => {
    const sortBy = router.query.sortBy;

    // @ts-ignore
    sortBy && setSort(sortValues[sortParams[sortBy]]);
  }, [router]);

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <span data-testid="status">{status}</span>
        <Toggler
          name="sort by"
          values={['release date', 'rating']}
          active={sort}
          onToggle={(val: string) => {
            const query = router.query;
            const path = router.query.id ? `/film/${router.query.id}` : router.pathname;

            // @ts-ignore
            query.sortBy = sortParams[sortValues[val]];
            router.push(`${path}?${qs.stringify(query)}`);
          }}
        />
      </div>
    </div>
  );
}
