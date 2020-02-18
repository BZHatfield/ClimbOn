import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import ClimbShowPage from './ClimbShowPage'
import EditClimbForm from './EditClimbForm'

const ClimbShowContainer = (props) => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ climbInfo, setClimbInfo ] = useState({})
  let climbId = props.match.params.id
  let tripId = props.match.params.trip_id
  let completeStatus = ""

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

  const updateClimb = (editedClimb) => {
    fetch(`/api/v1/trips/${editedClimb.trip.id}/climbs/${editedClimb.id}`, {
      credentials: 'same-origin',
      method: "PATCH",
      body: JSON.stringify(editedClimb),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setClimbInfo(response)
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect) {
    return <Redirect to={`/trips/${tripId}`}/>
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    updateClimb(climbInfo)
  }

  const handleEditInputChange = (event) => {
    setClimbInfo({
      ...climbInfo,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return(
    <div className="callout index grid-container-full">
      <ClimbShowPage
        completeStatus={completeStatus}
        climbInfo={climbInfo}
      />
    <EditClimbForm
        handleEditSubmit={handleEditSubmit}
        handleEditInputChange={handleEditInputChange}
        climbInfo={climbInfo}
      />
    </div>
  )
}

export default ClimbShowContainer
