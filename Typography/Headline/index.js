import React from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

const HeadlineWrapper = styled.h3`
  margin: 1rem 0;
  color: ${({color}) => color ? color : colors.dark};
  font-size: 2em;
  font-weight: 400;
  line-height: 1.2;
  text-align: ${ ({right, center}) => right ? 'right' : center ? 'center' : 'left' };
`

export default function Headline({children, ...rest}) {
  return (
    <HeadlineWrapper {...rest}>
      {children}
    </HeadlineWrapper>
  )
}
