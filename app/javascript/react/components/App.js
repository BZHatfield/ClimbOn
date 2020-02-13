import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import SessionsIndexContainer from './SessionsIndexContainer'
import SessionShowContainer from './SessionShowContainer'
import ClimbShowContainer from './ClimbShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SessionsIndexContainer} />
        <Route exact path='/sessions' component={SessionsIndexContainer} />
        <Route exact path='/sessions/:id' component={SessionShowContainer} />
        <Route exect path='/sessions/:session_id/climbs/:id' component={ClimbShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
