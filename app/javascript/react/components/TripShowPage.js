import React from 'react'
import { Link } from 'react-router-dom'

const TripShowPage = (props) => {

  let tripId = props.tripInfo.id

  return(
    <div className="info">
      {props.tripInfo.location != "" &&
        <h1 id="top-line">Session at {props.tripInfo.location} on {props.date}</h1>
      }
      {props.tripInfo.location == "" &&
        <h1 id="top-line">Session on {props.date}</h1>
      }
      {props.tripInfo.elapsed_time > 0 &&
        <h2 id="time">{props.tripInfo.elapsed_time} minutes</h2>
      }
      <h3 id="notes">{props.tripInfo.notes}</h3>
      <Link className="callout" to={`/trips/${tripId}/climbs/new`}>
        Click here to add a new Climb Attempt to this Session!
      </Link>
    </div>
  )
}

export default TripShowPage
