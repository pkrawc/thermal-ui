import React from 'react'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
  width: 100%;
  max-width: 360px;
`

export const Dropdown = props =>
  <DropdownWrapper {...props}>
    { props.children }
  </DropdownWrapper>
