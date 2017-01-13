import React from 'react'
import { Text } from '../Text'
import { Card } from '../../Display/Card'
import { Row, Column } from '../../Layout'

const TextExample = props =>
<Row>
  <Column smCol={6}>
    <Card
      title="fuck the world"
      media={{type: 'image', url:'https://source.unsplash.com/random/100X50'}}
      actions={[
        {
          action: e => { console.log('some action') },
          text: 'some action'
        },
        {
          action: e => { console.log('some other action') },
          text: 'some other action'
        }
      ]}
    >
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Card>
  </Column>
  <Column smCol={6}></Column>
</Row>

export default {
  title: 'Text',
  example: TextExample
}
