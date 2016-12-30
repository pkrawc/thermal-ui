import React, { Component } from 'react'
import { colors } from 'variables'
import * as groups from './examples'
import { Link } from 'react-router'
import { Headline, Title, Text, Subtitle } from '../Typography'
import { Container, Row, Column } from '../Layout'
import ShowroomMenu from './ShowroomMenu'


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
          {
            Object.values(groups).map((group, i) =>
              <ul key={`group-${i}`}>
                <li>
                  <Subtitle>
                    { group.groupTitle }
                  </Subtitle>
                  { group.items.map((item, i) => <Text key={`item-${i}`}>{item.title}</Text>) }
                </li>
              </ul>
            )
          }
        </ShowroomMenu>
        <Container flexColumn>
          {
            Object.values(groups).map((group, i) =>
              <Container key={`example-group-${i}`} padded >
                <Headline right>
                  { group.groupTitle }
                </Headline>
                {
                  group.items.map((item, i) =>
                    <Container>
                      <Subtitle color={colors.darkSecondary}>
                        {item.title}
                      </Subtitle>
                      {
                        item.examples.map((example, i) =>
                          <Row>
                            <Column mdCol={8}>
                              {example}
                            </Column>
                            <Column mdCol={4}>
                              code
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
