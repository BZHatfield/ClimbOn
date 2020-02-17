import React from 'react'
import { Link } from 'react-router-dom'

const NewTripPage = (props) => {

  let tripId = props.tripId

  return(
    <div>
      <h1>You have started a new Climbing Session!</h1>
      <Link to={`/trips/${tripId}/climbs/new`}>
        <h2>Click Here to Start a new Climb Attempt!</h2>
      </Link>
    </div>
  )
}

export default NewTripPage
