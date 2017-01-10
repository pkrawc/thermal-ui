import React from 'react'
import styled from 'styled-components'
import { colors, shadows } from 'variables'

const BottomBarOverlay = styled.div`
  position: fixed;
  display: ${
    ({active}) => {
      if (active) {
        document.body.classList.add('no-scroll')
        return 'block'
      } else {
        document.body.classList.remove('no-scroll')
        return 'none'
      }
    }
  };
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.disabled};
  z-index: 998;
`

const BottomBarInner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${colors.light};
  box-shadow: ${({active}) => active ? shadows.bottom : 'none'};
  min-height: 2.5rem;
  transition: transform 150ms ease-in-out;
  transform: ${({active}) => active ? 'translateY(0)' : 'translateY(100%)'};
  z-index: 999;
`

export const BottomBar = ({children, ...rest}) =>
  <BottomBarOverlay {...rest}>
    <BottomBarInner {...rest}>
      {children}
    </BottomBarInner>
  </BottomBarOverlay>
