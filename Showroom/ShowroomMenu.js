import styled from 'styled-components'
import { colors, media } from '../variables'

const ShowroomMenu = styled.ul`
  margin: 0;
  padding: 1em;
  background-color: ${colors.light};
  list-style: none;
  width: 100%;
  max-width: ${media.xSmall};
`

ShowroomMenu.ListItem = styled.li`
  color: blue;
`

export default ShowroomMenu
