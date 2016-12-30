import styled from 'styled-components'
import { colors } from '../variables'

export const Headline = styled.h3`
  margin: 1rem 0;
  color: ${({light}) => light ? colors.light : colors.dark};
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.2;
`
