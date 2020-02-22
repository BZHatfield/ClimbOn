import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import TripTile from './TripTile'
import UserShowContainer from './UserShowContainer'

const TripsIndexContainer = (props) => {
  const [ trips, setTrips ] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)

    fetch('/api/v1/trips')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setTrips(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const deleteTrip = (tripId) => {
    fetch(`/api/v1/trips/${tripId}`, {
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
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setTrips(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const tripTiles = trips.map((trip) => {

    let date = (new Date(trip.created_at)).toDateString()

    const handleDelete = () => {
      deleteTrip(trip.id)
    }

    return (
      <TripTile
        key={trip.id}
        tripData={trip}
        date={date}
        handleDelete={handleDelete}
        />
    )
  })

  return (
    <div>
      {trips.length == 0 &&
        <div className="welcome">
          <div className="tile">
            <h1>Welcome!</h1>
            <h1>Once you are signed in, click the link in the Nav Bar to start your first Session!</h1>
          </div>
        </div>
      }
      {trips.length > 0 &&
        <div className="index grid-x grid-padding-x align-center">
          <div className="cell small-12 chart-button">
            <Link to={`/charts/${trips[0].user.id}`}>
              <button className="large button">View Your Climb Data</button>
            </Link>
          </div>
          <h1 className="header cell small-8">Your Past Sessions</h1>
          {tripTiles}
        </div>
      }
    </div>
  )
}

export default TripsIndexContainer
