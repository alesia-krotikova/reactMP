import React from 'react';

import css from './Logo.scss';

type LogoProps = {
  onClick: () => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <a onClick={onClick} className={css.logo} href="#">
      <span>netflix</span>roulette
    </a>
  );
}
