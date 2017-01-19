import React, { Component, cloneElement } from 'react'
import styled from 'styled-components'
import { colors, media } from 'variables'

import { Container, Row, Column } from '../Layout'
import { Hero, Title, Subtitle } from '../Typography'
import { Link } from '../Navigation'
import { Card, List, Code } from '../Display'

import * as exampleGroups from './examples'
import { parameterize } from '../Utils'

const ShowroomList = styled(List)`
  background-color: ${colors.primary};
  color: ${colors.light};
  height: 100vh;
  max-width: ${media.xSmall};
  overflow-y: auto;
  text-align: right;
  width: 100%;
`

ShowroomList.Item = styled(List.Item)`
  padding: 0;
`

const ShowroomMenu = ({groups}) =>
  <ShowroomList>
    {Object.values(groups).map(
      (group, i) =>
        <ShowroomList.Item key={`menu-item-${i}`}>
          <Subtitle style={{paddingRight:'0.75em'}}>{group.groupTitle}</Subtitle>
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

const ShowroomStage = ({children, ...rest}) =>
  <StageContainer flexColumn padded>
    <Container style={{flex: 1, paddingBottom: '1em'}}>
      { children ? cloneElement(children, rest) : null }
    </Container>
    <Code element={children.children} style={{flex: 1}}/>
  </StageContainer>

const StageContainer = styled(Container)`
  height: 100vh;
  overflow-y: auto;
`

const Intro = props =>
  <Container>
    <Row>
      <Column smCol={12}>
        <Hero>
          Thermal UI Components
        </Hero>
        <Title>
          A library of UI components with sane defaults. Extendable with styled-components.
        </Title>
      </Column>
    </Row>
  </Container>

const Showroom = ({children, ...rest}) =>
  <Container flex>
    <ShowroomMenu groups={exampleGroups} />
    <ShowroomStage>
      {
        children ?
        cloneElement(children, ...rest) :
        <Intro />
      }
    </ShowroomStage>
  </Container>

export default Showroom
