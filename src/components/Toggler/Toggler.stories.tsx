import { storiesOf } from '@storybook/react';
import { Toggler } from './';
import React, {useState} from 'react';

storiesOf('Button Toggler', module).add('Button Toggler', () => {
  const [sort, setSort] = useState('second value');

  return (
    <Toggler
      name="test TOGGLER"
      values={['first value', 'second value']}
      active={sort}
      onToggle={(val: string) => {
        setSort(val);
      }}
    />
  );
});

