import styled from 'styled-components'
import { colors } from 'variables'

export const Headline = styled.h3`
  margin: 1rem 0;
  color: ${({light}) => light ? colors.light : colors.dark};
  font-size: 2em;
  font-weight: 400;
  line-height: 1.2;
  text-align: ${ ({right, center}) => right ? 'right' : center ? 'center' : 'left' };
`
