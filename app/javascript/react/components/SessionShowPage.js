import React from 'react'

const SessionShowPage = (props) => {
  return(
    <div className="info">
      <h1 id="top-line">Session at {props.sessionInfo.gym} on {props.date}</h1>
      <h2 id="time">{props.elapsedTime} minutes</h2>
      <p id="notes">{props.sessionInfo.notes}</p>
    </div>
  )
}

export default SessionShowPage
