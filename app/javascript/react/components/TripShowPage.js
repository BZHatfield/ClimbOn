import React from 'react'

const TripShowPage = (props) => {
  return(
    <div className="info">
      <h1 id="top-line">Session at {props.tripInfo.location} on {props.date}</h1>
      <h2 id="time">{props.elapsedTime} minutes</h2>
      <h3 id="notes">{props.tripInfo.notes}</h3>
    </div>
  )
}

export default TripShowPage
