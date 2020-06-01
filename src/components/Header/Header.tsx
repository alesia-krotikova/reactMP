import React from 'react';
import { Logo } from "../Logo";

import css from './Header.scss';

type Header = {
  isSearchIcon?: boolean;
  click: () => void;
};

export function Header ({ isSearchIcon, click }: Header) {
  return (
    <header className={css.container}>
      <div className={css.wrap}>
        <Logo click={click} />
        {isSearchIcon && <a onClick={click} className={css.search} href="#"></a>}
      </div>
    </header>
  )
}
