import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.i`
  font-size: 1rem;
`

export default function Icon(props) {
  return (
    <IconWrapper {...props} />
  )
}
