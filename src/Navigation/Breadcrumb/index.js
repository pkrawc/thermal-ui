import React, { Children } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

const BreadcrumbWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  .crumb {
    list-style: none;
  }
`

export const Breadcrumb = props => (
  <Route children={({match}) => (
    <BreadcrumbWrapper {...props}>
      { match.url.split('/').map((path, i) => (
        <span key={`path-portion-${i}`}>/{path}</span>
      ))}
    </BreadcrumbWrapper>
  )}/>
)
