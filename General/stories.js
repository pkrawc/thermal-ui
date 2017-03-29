import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import { colors } from 'variables'
import Button from './Button'
import Icon from './Icon'


const story = storiesOf('General', module)
  .addDecorator(withKnobs)
  .addWithInfo('Button', 'Description', () => (
    <Button
      primary={boolean('Primary Toggle', true)}
      color={colors.primary}
      onClick={() => { console.log('button click')}}>
      Hello Button
    </Button>
  ))
  .addWithInfo('Icon', 'Description', () => (
    <Icon>
      Some Shitty Icon
    </Icon>
  ))

export default story
