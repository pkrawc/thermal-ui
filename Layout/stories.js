import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'

import Column from './Column'
import Row from './Row'
import Container from './Container'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addWithInfo('Grid', 'Description', () => {
    const styles = {
      backgroundColor: 'red'
    }
    return (
      <Container>
        <Row columns={16}>
          <Column sm={4}>
            <div style={styles}>hello</div>
          </Column>
          <Column sm={4}>
            <div style={styles}>hello</div>
          </Column>
          <Column sm={4}>
            <div style={styles}>hello</div>
          </Column>
        </Row>
        <Row>
          <Column sm={6}>
            <div style={styles}>hello</div>
          </Column>
          <Column sm={6}>
            <div style={styles}>hello</div>
          </Column>
        </Row>
        <Row>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
          <Column>R</Column>
        </Row>
      </Container>
    )
  })
