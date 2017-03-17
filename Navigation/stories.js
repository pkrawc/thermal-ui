import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import BottomBar from './BottomBar'

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .addWithInfo('BottomBar', 'Description', () => (
    <BottomBar active={boolean('Toggle', false)}>
      <Button onClick={() => {console.log('hello bottom button')}}>Hello Bottom Bar Button</Button>
    </BottomBar>
  ))
