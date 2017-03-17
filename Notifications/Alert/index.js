import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { colors, shadows } from '../../variables'

const AlertWrapper = styled.div`
  position: fixed;
  bottom: ${({isOpen}) => isOpen ? '1rem' : '-100%'};
  left: 1rem;
  padding: 0.5rem 1rem;
  background: ${({error}) => error ? colors.error : colors.light };
  border-radius: 2px;
  box-shadow: ${shadows.small};
  color: ${({error}) => error ? colors.light : colors.dark };
  font-size: 1em;
  transition: bottom 300ms ease-in-out;
  z-index: 999;
`

const Alert = ({ children, isOpen, error, ...remainingProps }) =>
  <AlertWrapper
    isOpen={isOpen}
    error={error}
    {...remainingProps}
  >
    {children}
  </AlertWrapper>

Alert.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  children: PropTypes.node
}

export default Alert
