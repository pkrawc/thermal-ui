import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, shadows, media } from 'variables'
import { Title, Button } from '../../index'

const CardWrapper = styled.div`
  background-color: ${({theme}) => theme.colors ? theme.colors.light : colors.light};
  border-radius: 4px;
  box-shadow: ${({theme}) => theme.shadows ? theme.shadows.small : shadows.small};
  padding: 0 1rem;
  overflow: auto;
  .card-actions {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    button:not(:last-of-type) {
      margin-left: 1em;
    }
    button { margin-bottom: 1em; }
  }
`

export default function Card({
  children,
  title,
  ...props
}) {
  return (
    <CardWrapper {...props}>
      { title ? <Title color={colors.darkSecondary}>{title}</Title> : null }
      {children}
    </CardWrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export function CardActions({
  actions
}) {
  return (
    <div className="card-actions">
      {
        Object.keys(actions).map((action, i) => (
          <Button
            key={`card-action-${i}`}
            className="action"
            onClick={actions[action].bind(this)}>
            {action}
          </Button>
        ))
      }
    </div>
  )
}

CardActions.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func)
}
