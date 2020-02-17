import React, { useState, useEffect } from 'react'

import NewTripPage from './NewTripPage'

const NewTripContainer = (props) => {
  const [ newTrip, setNewTrip ] = useState({})

  let emptyTrip = {
    location: "",
    elapsedTime: "",
    notes: ""
  }

  useEffect((emptyTrip) => {
    fetch(`/api/v1/trips`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emptyTrip)
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
      setNewTrip(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  
  return(
    <NewTripPage
      tripId={newTrip.id}
    />
  )
}

export default NewTripContainer
