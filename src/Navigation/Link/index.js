import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router'

export const Link = styled(RouterLink)`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 0.75em 1em;
  &.active {
    border-right: 4px solid #F9F9F9;
  }
`

Link.defaultProps = {
  activeClassName: 'active'
}
