import React from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';

import css from './Header.module.scss';

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <header className={css.container}>
      <div className={css.wrap}>
        <Link href="/">
          <Logo />
        </Link>
        {children}
      </div>
    </header>
  );
}
