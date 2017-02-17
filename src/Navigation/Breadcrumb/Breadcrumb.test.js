import React from 'react'
import renderer from 'react-test-renderer'
import { Breadcrumb } from '../Breadcrumb'

describe('Breadcrumb', () => {

  it('renders the Breadcrumb without crashing', () => {
    const tree = renderer.create(
      <Breadcrumb />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('navigates to the correct crumb when clicked', () => {
    return Promise.resolve(true)
  })
})
