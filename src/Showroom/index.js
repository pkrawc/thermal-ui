// vendor imports
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import { colors, media } from 'variables'

// local components and utilities
import { Container } from '../Layout'
import { Subtitle } from '../Typography'
import { List } from '../Display'
import { parameterize, asCode } from '../Utils'

// examples
import * as exampleGroups from './examples'


const ShowroomWrapper = styled(Container)`
  min-height: 100vh;
  overflow-y: auto;
  .showroom__list {
    position: fixed;
    top: 0; bottom: 0; left: 0;
    background-color: ${colors.primary};
    color: ${colors.light};
    max-width: ${media.xSmall};
    overflow-y: auto;
    text-align: right;
    width: calc(100% - 2em);
    height: 100vh;
    li {
      padding: 0;
    }
  }
  .showroom__stage {
    margin-left: ${media.xSmall};
  }
`

function ShowroomList({exampleGroups}) {
  return (
    <Container className="showroom__list">
      {
        Object.values(exampleGroups).map((group, i) => (
          <List key={`group-${i}`}>
            <li>
              <Subtitle>{group.groupTitle}</Subtitle>
            </li>
            <li>
              <List>
                {
                  group.items.map((item, i) => (
                    <li key={`item-${i}`}>
                      <Link to={`${parameterize(item.title)}`}>{item.title}</Link>
                    </li>
                  ))
                }
              </List>
            </li>
          </List>
        ))
      }
    </Container>
  )
}

function ShowroomStage({exampleGroups}) {
  return (
    <Container className="showroom__stage" padded flexColumn>
      <Container className="component">
        {
          Object.values(exampleGroups).map(group => (
            group.items.map((item, i) => (
              <Route path={`/${parameterize(item.title)}`} component={item.example}/>
            ))
          ))
        }
      </Container>
      <Container className="code">
        {
          Object.values(exampleGroups).map(group => (
            group.items.map((item, i) => (
              <Route path={`/${parameterize(item.title)}`} render={({match}) => (
                <pre>
                  <code>
                    { asCode(item.example) }
                  </code>
                </pre>
              )}/>
            ))
          ))
        }
      </Container>
    </Container>
  )
}

function Showroom({children, ...props}) {
  return (
    <Router>
      <ShowroomWrapper {...props}>
        <ShowroomList exampleGroups={exampleGroups} />
        <ShowroomStage exampleGroups={exampleGroups} />
      </ShowroomWrapper>
    </Router>
  )
}

export default Showroom
