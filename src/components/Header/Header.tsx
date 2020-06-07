import React from 'react';
import { Logo } from '../Logo';

import css from './Header.scss';

type HeaderProps = {
  onSwitchPage: () => void;
  children?: React.ReactNode;
};

export function Header({ onSwitchPage, children }: HeaderProps) {
  return (
    <header className={css.container}>
      <div className={css.wrap}>
        <Logo onClick={onSwitchPage} />
        {children}
      </div>
    </header>
  );
}
