import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Card, CardActions } from './Card'
import { Text } from '../Typography'

storiesOf('Display', module)
  .addWithInfo('Card', 'Description', () => (
    <Card title="fuck the world">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <CardActions actions={{
        'help me': function () {
          console.log('you need help')
        },
        'readable text, could be a whole sentence': function() {
          console.log('damn son')
        }
      }}/>
    </Card>
  ))
