import React from 'react'
import { Link } from 'react-router-dom'

const NewTripPage = (props) => {

  let tripId = props.tripId

  return(
    <div>
      <h1 className="info">You have started a new Climbing Session!</h1>
      <Link className="new" to={`/trips/${tripId}/climbs/new`}>
        <button className="button large">Click Here to Start a new Climb Attempt!</button>
      </Link>
    </div>
  )
}

export default NewTripPage
