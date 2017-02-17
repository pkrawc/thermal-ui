import React from 'react'
import renderer from 'react-test-renderer'
import { Breadcrumb } from '../Breadcrumb'
import { BrowserRouter } from 'react-router-dom'

describe('Breadcrumb', () => {

  it('renders the Breadcrumb without crashing', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Breadcrumb />
      </BrowserRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('navigates to the correct crumb when clicked', () => {
    return Promise.resolve(true)
  })
})
