import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

import { Container, Row, Column } from '../Layout'
import { Title, Subtitle } from '../Typography'
import { Link } from '../Navigation'
import { Card, List, Code } from '../Display'

import * as exampleGroups from './examples'

const ShowroomMenu = ({groups}) =>
  <List>
    {Object.values(groups).map(
      (group, i) =>
        <List.Item key={`menu-item-${i}`}>
          <Subtitle>{group.groupTitle}</Subtitle>
          <List>
            {group.items.map(
              (item, i) =>
                <List.Item key={`item-link-${i}`}>
                  <Link>{item.title}</Link>
                </List.Item>
            )}
          </List>
        </List.Item>
    )}
  </List>

const ShowroomStage = ({group}) =>
  <Container>
    <Title>{group.groupTitle}</Title>
    {group.items.map(
      (item, i) =>
        <Container key={`item-${i}`} padded>
          <Subtitle>{item.title}</Subtitle>
          <Card>
            <Container padded>
              {item.examples.map(
                (example, i) => example
              )}
            </Container>
          </Card>
          <Code code={item.example} />
        </Container>
    )}
  </Container>

const Showroom = props =>
  <Container flex>
    <ShowroomMenu groups={exampleGroups} />
    <Container>
      {Object.values(exampleGroups).map(
        (group, i) =>
          <ShowroomStage
            key={`stage-${i}`}
            group={group}
          />
      )}
    </Container>
  </Container>

export default Showroom
