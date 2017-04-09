import React from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

const HeroWrapper = styled.h1`
  margin: 1rem 0;
  color: ${({light}) => light ? colors.light : colors.dark};
  text-align: ${ ({right, center}) => right ? 'right' : center ? 'center' : 'left' };
  font-size: 4em;
  font-weight: 300;
  line-height: 1.2;
`

export default function Hero({children, ...rest}) {
  return (
    <HeroWrapper {...rest}>
      {children}
    </HeroWrapper>
  )
}
