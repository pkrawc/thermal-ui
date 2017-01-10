import styled from 'styled-components'
import { colors } from 'variables'

export const Subtitle = styled.h4`
  margin: 1rem 0;
  color: ${({color}) => color ? color : colors.darkSecondary};
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.2;
`
