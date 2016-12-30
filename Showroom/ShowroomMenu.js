import styled from 'styled-components'
import { colors, media } from '../variables'

const ShowroomMenu = styled.ul`
  margin: 0;
  padding: 1em;
  background-color: ${colors.light};
  list-style: none;
  width: 100%;
  max-width: 300px;
`

ShowroomMenu.ListItem = styled.li`
  color: blue;
`

export default ShowroomMenu
