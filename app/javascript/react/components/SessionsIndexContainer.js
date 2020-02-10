import React from 'react'

import SessionTile from './SessionTile'

const SessionsIndexContainer = (props) => {

  let sessions = [1, 2, 3]

  const sessionTiles = sessions.map((session) => {
    return (
      <SessionTile
        key={session.id}
        sessionData={session}
      />
    )
  })

  return (
    <div>
      <h1>Hello from Sessions Index Container </h1>
      {sessionTiles}
    </div>
  )
}

export default SessionsIndexContainer
