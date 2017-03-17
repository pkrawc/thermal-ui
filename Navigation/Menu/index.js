import styled from 'styled-components'
import { colors } from 'variables'

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${colors.primary};
  width: 100%;
  max-width: 2.5em;
  transform: translateX(calc((100% - 4px) * -1));
  transition: transform 150ms ease-in-out;
  &:hover {
    transform: translateX(0);
  }
`
