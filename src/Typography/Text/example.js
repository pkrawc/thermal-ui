import React from 'react'
import { Text } from '../Text'
import { Card, CardActions } from '../../Display/Card'
import { Row, Column } from '../../Layout'

function TextExample(props) {
  return (
    <Row>
      <Column smCol={6}>
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
      </Column>
      {/* <Column smCol={6}></Column> */}
    </Row>
  )
}

export default {
  title: 'Text',
  example: TextExample
}
