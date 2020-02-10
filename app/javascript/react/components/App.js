import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import SessionsIndexContainer from './SessionsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SessionsIndexContainer} />
        <Route exact path='/sessions' component={SessionsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
