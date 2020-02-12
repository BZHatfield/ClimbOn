import React, { useState, useEffect } from 'react'

import SessionTile from './SessionTile'

const SessionsIndexContainer = (props) => {
  const [ sessions, setSessions ] = useState([])

  useEffect(() => {
    fetch('/api/v1/sessions')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMEssage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setSessions(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])


  const sessionTiles = sessions.map((session) => {

    let date = (new Date(session.created_at)).toDateString()

    return (
      <SessionTile
        key={session.id}
        sessionData={session}
        date={date}
      />
    )
  })

  return (
    <div className="grid-container-full">
      <div className="callout session-index">
      <h1>Your Past Sessions</h1>
      {sessionTiles}
    </div>
    </div>
  )
}

export default SessionsIndexContainer
