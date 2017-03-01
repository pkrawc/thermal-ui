import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '../Input'

describe('Input', () => {
  const props = {
    id: '1',
    label: 'input label',
    type: 'text'
  }
  const tree = renderer.create(<Input {...props} />).toJSON()

  it('renders without crashing', () => {
    expect(tree).toMatchSnapshot()
  })
})
