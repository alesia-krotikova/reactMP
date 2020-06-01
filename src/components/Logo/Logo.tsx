import React from 'react';

import css from './Logo.scss';

type Logo = {
  click: () => void;
};

export function Logo ({ click }:Logo) {
  return <a onClick={click} className={css.logo} href="#"><span>netflix</span>roulette</a>;
}
