import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from '../Layout'

const ShowroomContainer = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ShowroomContainer
