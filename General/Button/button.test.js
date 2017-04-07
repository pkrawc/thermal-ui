import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button'

describe('Button', () => {

  it('renders a Button without crashing', () => {
    const tree = renderer.create(
      <Button>Hello World</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

})
