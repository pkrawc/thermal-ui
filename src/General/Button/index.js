import styled from 'styled-components'
import { colors, shadows } from 'variables'

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({primary, color}) => {
      if (primary) {
        if (color) return color
        else return colors.darkSecondary
      } else {
        return 'transparent'
      }
    }
  };
  border: 2px solid ${({color}) => color ? color : colors.darkSecondary};
  border-radius: 2px;
  box-shadow: none;
  color: ${
    ({color, primary}) => {
      if (primary) return colors.light
      else {
        if (color) return color
        else return colors.darkSecondary
      }
    }
  };
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
    background-color: ${
      ({primary, color}) => {
        if (primary) {
          return colors.light
        } else {
          if (color) return color
          else return colors.darkSecondary
        }
      }
    };
    box-shadow: ${shadows.medium};
    color: ${
      ({primary, color}) => {
        if (primary) {
          if (color) return color
          else return colors.darkSecondary
        }
        else return colors.light
      }
    };
  }
  &:focus: {
    box-shadow: none;
  }
`
