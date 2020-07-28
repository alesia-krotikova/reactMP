import React from 'react';
import { Logo } from '../Logo';

import css from './Footer.module.scss';

export function Footer() {
  return (
    <section className={css.container}>
      <Logo />
    </section>
  );
}
