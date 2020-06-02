import React from 'react';
import { Logo } from '../Logo';

import css from './Footer.scss';

type FooterProps = {
  onSwitchPage: () => void;
};

export function Footer({ onSwitchPage }: FooterProps) {
  return (
    <section className={css.container}>
      <Logo onClick={onSwitchPage} />
    </section>
  );
}
