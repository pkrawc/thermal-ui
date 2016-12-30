import styled from 'styled-components'
import { colors } from 'variables'

export const Title = styled.h2`
  margin: 1rem 0;
  color: ${({light}) => light ? colors.light : colors.dark};
  font-size: 1.5em;
  font-weight: 400;
  line-height: 1.2;
`
