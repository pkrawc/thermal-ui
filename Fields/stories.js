import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import Input from './Input'
import RadioSet from './Radio'

import { Button } from '../index'


storiesOf('Fields', module)
  .addDecorator(withKnobs)
  .addWithInfo('Input', 'Description', () => (
    <Input
      autofocus
      type="email"
      label="Email"
      error={boolean('Error Toggle', false)}
      errorText={text('Error Text', 'this email is already in use')}
    />
  ))
  .addWithInfo('Radio Field', 'Description', () => (
    <RadioSet options={['option 1', 'option 2', 'option 3']}/>
  ))
