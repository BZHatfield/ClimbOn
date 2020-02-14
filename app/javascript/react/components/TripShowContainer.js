import React, { useState, useEffect } from 'react'

import TripShowPage from './TripShowPage'
import ClimbTile from './ClimbTile'

const TripShowContainer = (props) => {
  const [ tripInfo, setTripInfo ] = useState({})
  const [ climbs, setClimbs ] = useState([])

  let tripId = props.match.params.id
  let date = (new Date(tripInfo.created_at)).toDateString()
  let elapsedTime = tripInfo.elapsed_time

  useEffect(() => {
    fetch(`/api/v1/trips/${tripId}`)
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
      setTripInfo(response)
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
        id={climb.id}
        tripId={tripId}
        climbStatus={climbStatus}
        climbType={climbType}
        wallType={wallType}
        grade={climb.grade}
      />
    )
  })

  return(
    <div className="callout index grid-container-full">
      <TripShowPage
        date={date}
        tripInfo={tripInfo}
        elapsedTime={elapsedTime}
      />
      {climbTiles}
    </div>
  )
}

export default TripShowContainer
