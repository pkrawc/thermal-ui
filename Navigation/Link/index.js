import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router'

RouterLink.activeClassName = 'active'

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  .active {
    border-right: 2px solid #F9F9F9;
  }
`
