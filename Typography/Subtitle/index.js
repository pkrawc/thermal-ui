import React from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

const SubtitleWrapper = styled.h4`
  margin: 1rem 0;
  color: ${({color}) => color ? color : colors.darkSecondary};
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.2;
`

export default function Subtitle({children, ...rest}) {
  return (
    <SubtitleWrapper {...rest}>
      {children}
    </SubtitleWrapper>
  )
}
