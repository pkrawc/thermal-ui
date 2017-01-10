import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

import { Container, Row, Column } from '../Layout'
import { Title, Subtitle } from '../Typography'
import { Link } from '../Navigation'
import { Card, List, Code } from '../Display'

import * as exampleGroups from './examples'
import { parameterize } from '../Utils'

const ShowroomList = styled(List)`
  background-color: #27AE60;
  color: #F9F9F9;
  height: 100vh;
  max-width: 240px;
  overflow-y: auto;
  text-align: right;
  width: 100%;
`

ShowroomList.Item = styled(List.Item)`
  padding: 0 1em;
`

const ShowroomMenu = ({groups}) =>
  <ShowroomList>
    {Object.values(groups).map(
      (group, i) =>
        <ShowroomList.Item key={`menu-item-${i}`}>
          <Subtitle>{group.groupTitle}</Subtitle>
          <List>
            {group.items.map(
              (item, i) =>
                <List.Item key={`item-link-${i}`}>
                  <Link to={parameterize(item.title)}>{item.title}</Link>
                </List.Item>
            )}
          </List>
        </ShowroomList.Item>
    )}
  </ShowroomList>

const ShowroomStage = ({group}) =>
  <Container padded>
    <Title>{group.groupTitle}</Title>
    {group.items.map(
      (item, i) =>
        <Container key={`item-${i}`}>
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

const StageContainer = styled(Container)`
  height: 100vh;
  overflow-y: auto;
`

const Showroom = props =>
  <Container flex>
    <ShowroomMenu groups={exampleGroups} />
    <StageContainer>
      {Object.values(exampleGroups).map(
        (group, i) =>
          <ShowroomStage
            key={`stage-${i}`}
            group={group}
          />
      )}
    </StageContainer>
  </Container>

export default Showroom
