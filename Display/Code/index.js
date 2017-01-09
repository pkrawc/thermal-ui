import React from 'react'
import styled from 'styled-components'

const CodeWrapper = styled.code`
  background-color: black;
`

export const Code = ({children, ...rest}) =>
  <pre>
    <CodeWrapper {...rest}>
      hello
    </CodeWrapper>
  </pre>
