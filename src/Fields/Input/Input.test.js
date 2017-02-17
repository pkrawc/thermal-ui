import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from '../Input'

describe('Input', () => {
  const tree = renderer.create(
    <Input id={`1`} label="input label" type="text" />
  ).toJSON()

  test('It renders without crashing', () => {
    expect(tree).toMatchSnapshot()
  })
})
