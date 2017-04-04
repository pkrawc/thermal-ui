import React from 'react'
import styled from 'styled-components'

const StyledSwitch = styled.label`

`

function Switch(props) {
  return (
    <StyledSwitch>
      <input type="checkbox"/>
      <div className="slider"></div>
    </StyledSwitch>
  )
}
