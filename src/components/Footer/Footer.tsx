import React from 'react';
import { Logo } from '../Logo';

import css from './Footer.scss';

export function Footer() {
  return (
    <section className={css.container}>
      <Logo />
    </section>
  );
}
