import React from 'react';

import css from './SectionStatus.scss';

type SectionStatusProps = {
  status?: string;
  toggler: React.ReactNode;
};

export function SectionStatus({ status, toggler }: SectionStatusProps) {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <span>{status}</span>
        {toggler}
      </div>
    </div>
  );
}
