import React from 'react'
import { Link } from 'react-router-dom'

const TripShowPage = (props) => {

  let tripId = props.tripInfo.id

  return(
    <div className="info">
      <div className="grid-x align-center">
        {props.tripInfo.location != "" &&
          <h1 className="cell small-12" id="top-line">Session at {props.tripInfo.location} on {props.date}</h1>
        }
        {props.tripInfo.location == "" &&
          <h1 className="cell small-10" id="top-line">Session on {props.date}</h1>
        }
        {props.tripInfo.elapsed_time > 0 &&
          <h2 className="cell small-10" id="time">{props.tripInfo.elapsed_time} minutes</h2>
        }
        <h3 className="cell small-10" id="notes">{props.tripInfo.notes}</h3>
        <div className="climb-button cell small-6">
          <Link to={`/trips/${tripId}/climbs/new`}>
            <button className="button">Click here to add a new Climb Attempt to this Session!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TripShowPage
