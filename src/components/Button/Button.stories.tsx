import { storiesOf } from '@storybook/react';
import { Button } from './';
import React from 'react';

storiesOf('Button', module).add('Button', () => {
  return (
    <Button name='test Button' isRed={true} onClick={() => alert('Button is pressed')} />
  );
});

