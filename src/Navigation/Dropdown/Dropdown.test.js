import React from 'react'
import renderer from 'react-test-renderer'
import { Dropdown } from '../Dropdown'

describe('Dropdown', () => {

  const tree = renderer.create(
    <Dropdown onClick={() => 'it works'}>
      <p onClick={() => 'it really works'}>child</p>
    </Dropdown>
  ).toJSON()

  test('renders without crashing', () => {
    expect(tree).toMatchSnapshot()
  })

  test('toggles the menu when clicked', () => {
    const clicked = tree.props.onClick()
    const output = 'it works'

    expect(clicked).toEqual(output)
    return Promise.resolve()
  })

  test('fires child onClick when child is clicked', () => {
    g

})
