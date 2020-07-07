import React from 'react';
import css from './NotFoundPage.scss';
import { Header } from '../Header';

export function NotFoundPage() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <div className={css.wrap}>
          <h2>Page not found</h2>
        </div>
      </div>
    </>
  );
}
