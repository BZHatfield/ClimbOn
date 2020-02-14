import React, { useState, useEffect } from 'react'

import ClimbShowPage from './ClimbShowPage'

const ClimbShowContainer = (props) => {
  const [ climbInfo, setClimbInfo ] = useState({})

  let climbId = props.match.params.id
  let tripId = props.match.params.trip_id
  let completeStatus = ""
  let climbType = climbInfo.climb_type
  let wallType = climbInfo.wall_type
  let holdTypes = climbInfo.hold_types

  useEffect(() => {
    fetch(`/api/v1/trips/${tripId}/climbs/${climbId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(response => {
      setClimbInfo(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  if (climbInfo.completed) {
    completeStatus = "Completed"
  } else {
    completeStatus = "Unfinished"
  }

  return(
    <div className="callout index grid-container-full">
      <ClimbShowPage
        completeStatus={completeStatus}
        climbType={climbType}
        wallType={wallType}
        holdTypes={holdTypes}
        grade={climbInfo.grade}
        crux={climbInfo.crux}
      />
    </div>
  )
}

export default ClimbShowContainer
