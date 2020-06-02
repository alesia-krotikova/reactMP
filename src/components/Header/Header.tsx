import React from 'react';
import { Logo } from '../Logo';

import css from './Header.scss';

type HeaderProps = {
  isSearchIcon?: boolean;
  onSwitchPage: () => void;
};

export function Header({ isSearchIcon, onSwitchPage }: HeaderProps) {
  return (
    <header className={css.container}>
      <div className={css.wrap}>
        <Logo onClick={onSwitchPage} />
        {isSearchIcon && <a onClick={onSwitchPage} className={css.search} href="/"></a>}
      </div>
    </header>
  );
}
