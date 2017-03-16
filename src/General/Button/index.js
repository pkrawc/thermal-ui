import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, shadows } from 'variables'

const ButtonWrapper = styled.button`
  a,
  &#{&} {
    padding: 0.5rem 1rem;
    background-color: ${({primary, color, theme}) => {
      if (primary) {
        if (color) return color
        else if (theme.colors) return theme.colors.darkSecondary
        else return colors.darkSecondary
      } else return 'transparent'
    }};
    border: 2px solid ${({color}) => color ? color : colors.darkSecondary};
    border-radius: 2px;
    box-shadow: none;
    color: ${({primary, color, theme}) => {
      if (primary) {
        if (theme.colors) return theme.colors.light
        else return colors.light
      } else {
        if (color) return color
        else if (theme.colors) return theme.colors.darkSecondary
        else return colors.darkSecondary
      }
    }};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    min-width: 4rem;
    outline: none;
    text-align: center;
    text-transform: uppercase;
    text-overflow: ellipsis;
    transition: all 150ms ease-in-out;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      background-color: ${({primary, color, theme}) => {
        if (primary) {
          if (theme.colors) return theme.colors.light
          else return colors.light
        } else {
          if (color) return color
          else if (theme.colors) return theme.colors.darkSecondary
          else return colors.darkSecondary
        }
      }};
      box-shadow: ${shadows.medium};
      color: ${({primary, color, theme}) => {
        if (primary) {
          if (color) return color
          else if (theme.colors) return theme.colors.darkSecondary
          else return colors.darkSecondary
        } else {
          if (theme.colors) return theme.colors.light
          else return colors.light
        }
      }};
    }
    &:focus: {
      box-shadow: none;
    }
  }
`

export function Button({children, to, onClick, ...props}) {
  return (
    <ButtonWrapper {...props} onClick={onClick}>
      {to ? <Link to={to}>{children}</Link> : <span>{children}</span>}
    </ButtonWrapper>
  )
}
