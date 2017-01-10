import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: ${({flex, flexColumn}) => flex || flexColumn ? 'flex' : 'block'};
  flex-direction: ${({flexColumn}) => flexColumn ? 'column' : 'initial'};
  padding: ${({padded}) => padded ? '1rem' : 'initial'};
  min-height: ${({flex, flexColumn}) => flex || flexColumn ? '100vh' : 'initial'};
  width: 100%;
`
