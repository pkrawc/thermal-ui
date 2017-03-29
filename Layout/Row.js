import React, { Children, cloneElement, Component, PropTypes } from 'react'
import styled from 'styled-components'

const RowWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-bottom: 1em;
  max-width: 75rem;
`
export default function Row({columns, children, ...props}) {
  return (
    <RowWrapper>
      {
        columns ? Children.map(children, (child, i) => (
          cloneElement(child, {columns})
        )) : children
      }
    </RowWrapper>
  )
}

Row.propTypes = {
  columns: PropTypes.number
}
