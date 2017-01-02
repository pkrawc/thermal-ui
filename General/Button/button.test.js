import React from 'react'
import renderer from 'react-test-render'
import { Button } from '../Button'

test('renders correctly', () => {
  const tree = renderer.create(
    <Button>Hello World</Button>
  ).toJSON();
  expect(tree).toMatchSnapshot()
})
