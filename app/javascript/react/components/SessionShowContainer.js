import React, { useState, useEffect } from 'react'

import SessionShowPage from './SessionShowPage'
import ClimbTile from './ClimbTile'

const SessionShowContainer = (props) => {
  const [ sessionInfo, setSessionInfo ] = useState({})
  const [ climbs, setClimbs ] = useState([])

  let sessionId = props.match.params.id
  let date = (new Date(sessionInfo.created_at)).toDateString()
  let elapsedTime = sessionInfo.elapsed_time

  useEffect(() => {
    fetch(`/api/v1/sessions/${sessionId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setSessionInfo(response)
      setClimbs(response.climbs)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const climbTiles = climbs.map((climb) => {

    let climbStatus = ""
    let climbType = climb.climb_type
    let wallType = climb.wall_type

    if (climb.completed) {
      climbStatus = "Completed"
    } else {
      climbStatus = "Unfinished"
    }

    return(
      <ClimbTile
        key={climb.id}
        climbStatus={climbStatus}
        climbType={climbType}
        wallType={wallType}
        grade={climb.grade}
      />
    )
  })

  return(
    <div className="callout index grid-container-full">
      <SessionShowPage
        date={date}
        sessionInfo={sessionInfo}
        elapsedTime={elapsedTime}
      />
      {climbTiles}
    </div>
  )
}

export default SessionShowContainer
