import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Showroom from './Showroom'
import * as examples from './Showroom/examples'
import { parameterize } from './Utils'

const Routing = (
  <Router history={browserHistory}>
    <Route path="/thermal-ui/" component={Showroom}>
      {Object.values(examples).map(
        group => group.items.map(
          item => (
            <Route path={parameterize(item.title)} component={item.example} />
          )
        )
      )}
    </Route>
  </Router>
)

render(
  Routing,
  document.getElementById('root')
)
