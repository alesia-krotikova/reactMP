import React from 'react';
import cx from 'classnames';

import css from './Button.scss';

type Button = {
  name: string;
  isRed?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  click: () => void;
  selected?: boolean;
};

export function Button ({ click, name, selected, isRed, isLeft, isRight }: Button) {
  return (
    <button
      type="button"
      onClick={click}
      className={cx(css.container, {[css.red]: selected || isRed, [css.left]: isLeft, [css.right]: isRight})}
      disabled={selected}>
      {name}
  </button>
  )
}
