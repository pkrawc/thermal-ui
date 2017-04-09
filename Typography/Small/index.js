import React from 'react'
import styled from 'styled-components'

const SmallWrapper = styled.p`
  font-size: 0.75em;
`

export default function Small({children, ...rest}) {
  return (
    <SmallWrapper {...rest}>
      {children}
    </SmallWrapper>
  )
}
