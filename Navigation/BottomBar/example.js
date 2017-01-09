import React, { Component } from 'react'
import { BottomBar } from '../BottomBar'
import { Button } from '../../General/Button'
import { Container } from '../../Layout'

class BottomBarExample extends Component {
  constructor(props) {
    super(props)
    this.state = { bbActive: false }
    this.toggleState = (e) => {
      e.preventDefault
      this.setState({bbActive: !this.state.bbActive})
    }
  }
  render() {
    return (
      <Container>
        <Button onClick={this.toggleState}>Click to toggle bottom bar</Button>
        <BottomBar active={this.state.bbActive}>Hello Bottom Bar</BottomBar>
      </Container>
    )
  }
}

export default {
  title: 'Bottom Bar',
  examples: [
    (
      <BottomBarExample />
    )
  ]
}
