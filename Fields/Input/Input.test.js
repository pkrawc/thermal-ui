import React from 'react'
import renderer from 'react-test-renderer'
import TextInput from '../Input'

describe('Input', () => {
  const props = {
    label: 'input label',
    type: 'text',
    test: {
      id: '1234'
    }
  }
  const tree = renderer.create(<TextInput {...props} />).toJSON()
  // need to set the id's for input and label since they're generated on the fly by shorid
  tree.children[0].props.id = '123'
  tree.children[1].props.htmlFor = '123'
  it('renders without crashing', () => {
    expect(tree).toMatchSnapshot()
  })
})
