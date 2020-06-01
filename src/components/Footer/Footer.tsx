import React from 'react';
import { Logo } from "../Logo";

import css from './Footer.scss';

type Footer = {
  click: () => void;
};

export function Footer ({ click }:Footer) {
  return <section className={css.container}><Logo click={click} /></section>;
}
