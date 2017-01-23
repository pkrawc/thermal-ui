import React, { Children } from 'react'
import styled from 'styled-components'

const BreadcrumbWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

export const Breadcrumb = props =>
  <BreadcrumbWrapper {...props}>
    <li className="crumb">
      hi
    </li>
  </BreadcrumbWrapper>
