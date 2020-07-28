import React from 'react';
import cx from 'classnames';

import css from './Button.module.scss';

type ButtonProps = {
  name: string;
  isRed?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  isBetween?: boolean;
  onClick: () => void;
  selected?: boolean;
};

export function Button({
  onClick,
  name,
  selected,
  isRed,
  isLeft,
  isRight,
  isBetween,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(css.container, {
        [css.red]: selected || isRed,
        [css.left]: isLeft,
        [css.right]: isRight,
        [css.between]: isBetween,
      })}
      disabled={selected}
    >
      {name}
    </button>
  );
}
