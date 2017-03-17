import styled from 'styled-components'
import { colors } from 'variables'

const Title = styled.h2`
  margin: 1rem 0;
  color: ${({color, light}) => color ? color : light ? colors.light : colors.dark};
  font-size: 1.5em;
  font-weight: 400;
  line-height: 1.2;
`

export default Title
