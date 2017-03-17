import React from 'react'
import styled from 'styled-components'

const DropdownWrapper = styled.div`
  width: 100%;
  max-width: 360px;
`
export function Dropdown({children, ...props}) {
  return (
    <DropdownWrapper {...props}>
      { children }
    </DropdownWrapper>
  )
}
