import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TripsIndexContainer from './TripsIndexContainer'
import TripShowContainer from './TripShowContainer'
import ClimbShowContainer from './ClimbShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={TripsIndexContainer} />
        <Route exact path='/trips' component={TripsIndexContainer} />
        <Route exact path='/trips/:id' component={TripShowContainer} />
        <Route exect path='/trips/:trip_id/climbs/:id' component={ClimbShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
