import React from 'react';

import css from './SectionSlot.scss';

type SectionSlot = {
  children: React.ReactNode;
}

export function SectionSlot ({ children }: SectionSlot) {
  return (
    <section className={css.container}>
      <div className={css.wrap}>
        {children}
      </div>
    </section>
  );
}
