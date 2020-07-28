import React from 'react';

import css from './SectionSlot.module.scss';

type SectionSlotProps = {
  children: React.ReactNode;
};

export function SectionSlot({ children }: SectionSlotProps) {
  return (
    <section className={css.container}>
      <div className={css.wrap}>{children}</div>
    </section>
  );
}
