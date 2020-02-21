import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import TripShowPage from './TripShowPage'
import ClimbTile from './ClimbTile'
import EditTripForm from './EditTripForm'

const TripShowContainer = (props) => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ tripInfo, setTripInfo ] = useState({})
  const [ climbs, setClimbs ] = useState([])

  let tripId = props.match.params.id
  let date = (new Date(tripInfo.created_at)).toDateString()

  useEffect(() => {
    window.scrollTo(0, 0)

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

  const deleteClimb = (climbId) => {
    fetch(`/api/v1/trips/${tripId}/climbs/${climbId}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setClimbs(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const updateTrip = (editedTrip) => {
    fetch(`/api/v1/trips/${editedTrip.id}`, {
      credentials: 'same-origin',
      method: "PATCH",
      body: JSON.stringify(editedTrip),
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
      setTripInfo(response)
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect) {
    return <Redirect to={`/trips`} />
  }

  const handleEditSubmit = (event) => {
    event.preventDefault()
    updateTrip(tripInfo)
  }

  const handleEditInputChange = (event) => {
    setTripInfo({
      ...tripInfo,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const climbTiles = climbs.map((climb) => {

    let climbStatus = ""
    let climbType = climb.climb_type
    let wallType = climb.wall_type

    if (climb.completed) {
      climbStatus = "Completed"
    } else {
      climbStatus = "Unfinished"
    }

    const handleDelete = () => {
      deleteClimb(climb.id)
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
        handleDelete={handleDelete}
      />
    )
  })

  return(
    <div className="callout index grid-container-full">
      <TripShowPage
        date={date}
        tripInfo={tripInfo}
      />
      {climbTiles}
      <EditTripForm
        handleEditSubmit={handleEditSubmit}
        handleEditInputChange={handleEditInputChange}
        tripInfo={tripInfo}
      />
    </div>
  )
}

export default TripShowContainer
