import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import CheckBox from './Checkbox'
import TextInput from './Input'
import RadioSet from './Radio'

import { Button } from '../index'


storiesOf('Fields', module)
  .addDecorator(withKnobs)
  .addWithInfo('CheckBox', '', _ => (
    <CheckBox label="hello world" disabled={boolean('Disabled', false)}/>
  ))
  .addWithInfo('DatePicker', '', _ => (
    <div></div>
  ))
  .addWithInfo('Input', 'Description', _ => (
    <TextInput
      type="email"
      label="Email"
      error={boolean('Error Toggle', false)}
      errorText={text('Error Text', 'this email is already in use')}
    />
  ))
  .addWithInfo('RadioSet', 'Description', _ => (
    <RadioSet options={['option 1', 'option 2', 'option 3']}/>
  ))
  .addWithInfo('Range', '', _ => (
    <div></div>
  ))
  .addWithInfo('Switch', '', _ => (
    <div></div>
  ))
