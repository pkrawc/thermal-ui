import React, { Component } from 'react'
import asString from 'react-element-to-jsx-string'
import styled from 'styled-components'
import { colors } from 'variables'

import * as groups from './examples'
import { Container, Row, Column } from '../Layout'
import { Headline, Title, Text, Subtitle } from '../Typography'
import { Card } from '../Display'

import ShowroomMenu from './ShowroomMenu'


const MenuListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const MenuList = ({group}) =>
  <MenuListWrapper >
    <li>
      <Subtitle>
        { group.groupTitle }
      </Subtitle>
      { group.items.map((item, i) => <Text key={`item-${i}`}>{item.title}</Text>)}
    </li>
  </MenuListWrapper>

export default class extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
  }

  render() {
    const { children, ...rest } = this.props
    return (
      <Container flex>
        <ShowroomMenu>
          { Object.values(groups).map((group, i) => <MenuList key={`menu-list-${i}`} group={group} />) }
        </ShowroomMenu>
        <Container flexColumn style={{overflowY:'auto', height:'100vh'}}>
          {
            Object.values(groups).map((group, i) =>
              <Container key={`example-group-${i}`} padded >
                <Headline right color={colors.primary}>
                  { group.groupTitle }
                </Headline>
                {
                  group.items.map((item, i) =>
                    <Container key={`group-item-${i}`}>
                      <Subtitle color={colors.darkSecondary}>
                        {item.title}
                      </Subtitle>
                      {
                        item.examples.map((example, i) =>
                          <Row key={`item-examples-${i}`}>
                            <Column mdCol={12}>
                              <Card>
                                <Container padded>
                                  {example}
                                </Container>
                              </Card>
                            </Column>
                            <Column mdCol={12}>
                              <pre>
                                <code>
                                  { asString(example) }
                                </code>
                              </pre>
                            </Column>
                          </Row>
                        )
                      }
                    </Container>
                  )
                }
              </Container>
            )
          }
        </Container>
      </Container>
    )
  }
}
