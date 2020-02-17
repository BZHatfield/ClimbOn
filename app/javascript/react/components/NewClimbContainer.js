import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import NewClimbForm from './NewClimbForm'

const NewClimbContainer = (props) => {
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ newTripId, setNewTripId] = useState("")
  const [ climbs, setClimbs ] = useState([])
  const [ newClimb, setNewClimb ] = useState({
    climbType: "",
    grade: "",
    wallType: "",
    holdTypes: "",
    crux: "",
    completed: ""
  })

  const handleInputChange = (event) => {
    setNewClimb({
      ...newClimb,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = (event) => {
    setNewClimb({
      climbType: "",
      grade: "",
      wallType: "",
      holdTypes: "",
      crux: "",
      completed: ""
    })
  }

  let tripId = props.match.params.id
  const addNewClimb = (formPayLoad) => {
    fetch(`/api/v1/trips/${tripId}/climbs`, {
      credentials: 'same-origin',
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayLoad)
    })
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
      setClimbs([...climbs, response.climbs])
      setNewTripId(response.trip.id)
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  if (shouldRedirect) {
    return <Redirect to={`/trips/${newTripId}`} />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewClimb(newClimb)
  }

  return(
    <NewClimbForm
      newClimb={newClimb}
      clearForm={clearForm}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
    />
  )
}

export default NewClimbContainer
