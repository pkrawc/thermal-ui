import React from 'react'
import { browserHistory, Router, Route } from 'react-router'
import { render } from 'react-dom'
import Showroom from './Showroom'
import { Menu } from './Navigation/Menu'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Showroom}>
      <Route path="menu" component={Menu} />
    </Route>
  </Router>
)


render(
  router,
  document.getElementById('root')
)
