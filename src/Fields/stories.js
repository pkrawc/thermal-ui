import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import { Input } from './Input'
import { Button } from '../General'


storiesOf('Fields', module)
  .addDecorator(withKnobs)
  .addWithInfo('Input', 'Description', () => (
    <Input
      id="example"
      type="text"
      label="Tenants Name"
      value={text('value')}
      placeholder="Janet Wood"
      error={boolean('Error Toggle', false)}
      errorText={text('Error Text', 'You done messed up')}
    />
  ))
