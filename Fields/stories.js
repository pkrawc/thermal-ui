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
      id="example"
      type="text"
      label="User Name"
      value={text('value')}
      placeholder="Janet Wood"
      error={boolean('Error Toggle', false)}
      errorText={text('Error Text', 'You done messed up')}
    />
  ))
  .addWithInfo('Radio Field', 'Description', () => (
    <RadioSet  name="some name" values={[
      {
        title: 'a question worth asking',
        values: ['option 1', 'option 2']
      }
    ]}/>
  ))
