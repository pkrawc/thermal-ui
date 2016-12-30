import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../Layout'

const ExampleContainerWrapper = styled(Container)`
  padding: 1em;
`

const ExampleContainer = props => {
  return (
    <ExampleContainerWrapper>
      {
        Object.values(props.examples).map( (example, i) => <div>{example.title}</div>)
      }
    </ExampleContainerWrapper>
  )
}

export default ExampleContainer
