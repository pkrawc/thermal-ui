import React, { Component } from 'react'
import * as examples from './examples'
import { Link } from 'react-router'
import { MenuLayout, Container } from '../Layout'
import ShowroomMenu from './ShowroomMenu'
import ShowroomContainer from './ShowroomContainer'


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
      <MenuLayout>
        <ShowroomMenu>
          {
            Object.values(examples).map((example, i) =>
              <Link key={i} to={example.title.toLowerCase()}>{example.title}</Link>
            )
          }
        </ShowroomMenu>
        <Container>
          { children ? React.cloneElement(children, rest) : null }
        </Container>
      </MenuLayout>
    )
  }
}
