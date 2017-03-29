import React, { Component } from 'react'
import styled from 'styled-components'
import Animated from 'animated/lib/targets/react-dom'

const Wrapper = styled.div`
  position: relative;
  display: ${({flex, flexColumn}) => flex || flexColumn ? 'flex' : 'block'};
  flex-direction: ${({flexColumn}) => flexColumn ? 'column' : 'initial'};
  padding: ${({padded}) => padded ? '1rem' : 'initial'};
  min-height: ${({flex, flexColumn}) => flex || flexColumn ? '100vh' : 'initial'};
`

export default class Container extends Component {
  constructor(props, context) {
    super(props, context)
    this.animation = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.spring(this.animation, {
      toValue: 1,
      velocity: 0.3,
      tension: 0.2
    }).start()
  }
  render() {
    const { fadeIn } = this.props
    return fadeIn ? (
      <Animated.div style={{
        opacity: this.animation
      }}>
        <Wrapper {...this.props}>
          { this.props.children }
        </Wrapper>
      </Animated.div>
    ) : (
      <Wrapper {...this.props}>
        { this.props.children }
      </Wrapper>
    )
  }
}
