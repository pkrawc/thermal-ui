import React from 'react'
import styled from 'styled-components'
import { asCode } from '../../Utils'
import { colors } from 'variables'

const Pre = styled.pre`
  position: relative;
  padding: 1em;
  margin: 0;
  background-color: ${colors.dark};
  border-radius: 4px;
  color: ${colors.light};
  width: 100%;
  overflow-x: auto;
  height: auto;
  code {
    color: white;
    width: 100%;
  }
`

export const Code = ({children, ...rest}) =>
  <Pre {...rest}>
    <code>
      { asCode(rest.element) }
    </code>
  </Pre>
