import React from 'react'
import renderer from 'react-test-renderer'
import { BottomBar } from '../BottomBar'

it('renders bottom bar correctly', () => {
  const tree = renderer.create(
    <BottomBar>
      Hello World
    </BottomBar>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
