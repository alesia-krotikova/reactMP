import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

import css from './Header.scss';

type HeaderProps = {
  children?: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <header className={css.container}>
      <div className={css.wrap}>
        <Link to="/">
          <Logo />
        </Link>
        {children}
      </div>
    </header>
  );
}
