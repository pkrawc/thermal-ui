import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import { colors, shadows } from 'variables'

const BottomBarWrapper = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  visibility: ${({active}) => active ? 'initial' : 'hidden'};
  pointer-events: ${({active}) => active ? 'initial' : 'none'};
  background-color: ${colors.disabled};
  transition: visibility 150ms ease-in-out;
`

const Bar = styled.div`
  margin: 0.5em;
  padding: 1em;
  position: fixed;
  right: 0; bottom: 0; left: 0;
  background-color: ${colors.light};
  border-radius: 2px;
  box-shadow: ${shadows.small};
  font-size: 1em;
  min-height: 2.5em;
  opacity: ${({active}) => active ? 1 : 0};
  transform: ${({y}) => `translateY(${y}%)`};
  transition: opacity 150ms ease-in-out;
  z-index: 999;
`

export function BottomBar({
  children,
  toggle,
  active
}) {
  return (
    <BottomBarWrapper active={active} onClick={toggle}>
      <Motion style={{y: spring(active ? 0 : 100, {stiffness: 250, damping: 30})}}>
        {({y}) =>
          <Bar
            active={active}
            y={y}
            onClick={(e) => {e.stopPropagation()}}>
            {children}
          </Bar>}
      </Motion>
    </BottomBarWrapper>
  )
}

BottomBar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}
