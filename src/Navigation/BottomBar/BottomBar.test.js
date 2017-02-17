import React from 'react'
import renderer from 'react-test-renderer'
import { BottomBar } from '../BottomBar'

describe('BottomBar', () => {

  it('renders bottom bar correctly', () => {
    const tree = renderer.create(
      <BottomBar active={false} toggle={() => true}>
        Hello World
      </BottomBar>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
