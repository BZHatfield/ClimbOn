import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TripsIndexContainer from './TripsIndexContainer'
import TripShowContainer from './TripShowContainer'
import NewTripContainer from './NewTripContainer'
import ClimbShowContainer from './ClimbShowContainer'
import NewClimbContainer from './NewClimbContainer'
import ChatContainer from './ChatContainer'
import ChartsContainer from './ChartsContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={TripsIndexContainer} />
        <Route exact path='/chats' component={ChatContainer} />
        <Route exact path='/chats/:id' component={ChatContainer} />
        <Route exact path='/charts/:id' component={ChartsContainer} />
        <Route exact path='/trips' component={TripsIndexContainer} />
        <Route exact path='/trips/new' component={NewTripContainer} />
        <Route exact path='/trips/:id' component={TripShowContainer} />
        <Route exact path='/trips/:trip_id/climbs/new' component={NewClimbContainer} />
        <Route exect path='/trips/:trip_id/climbs/:id' component={ClimbShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
