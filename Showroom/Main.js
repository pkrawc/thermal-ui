import React, { Component } from 'react'
import { Link } from 'react-router'
import { MenuLayout } from '../Layout'
import { Menu } from '../Navigation'
import ShowroomMenu from './ShowroomMenu'
import ShowroomContainer from './ShowroomContainer'

const Main = ({children, examples}) =>
  <MenuLayout>
    <ShowroomMenu>
      {
        Object.values(examples).map((example, i) =>
          <Link key={i} to={example.title}>{example.title}</Link>
        )
      }
    </ShowroomMenu>
    <ShowroomContainer>
      { children ? React.cloneElement(children, examples) : null }
    </ShowroomContainer>
  </MenuLayout>

export default Main
