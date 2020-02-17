import React from 'react'
import { Link } from 'react-router-dom'

const TripShowPage = (props) => {

  let tripId = props.tripInfo.id

  return(
    <div className="info">
      {props.tripInfo.location != null &&
        <h1 id="top-line">Session at {props.tripInfo.location} on {props.date}</h1>
      }
      {props.tripInfo.location == null &&
        <h1 id="top-line">Session on {props.date}</h1>
      }
      {props.elapsedTime > 0 &&
        <h2 id="time">{props.elapsedTime} minutes</h2>
      }
      <h3 id="notes">{props.tripInfo.notes}</h3>
      <Link className="callout" to={`/trips/${tripId}/climbs/new`}>
        Click here to add a new Climb Attempt to this Session!
      </Link>
    </div>
  )
}

export default TripShowPage
