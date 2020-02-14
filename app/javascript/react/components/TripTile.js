import React from 'react'
import { Link } from 'react-router-dom'

const TripTile = (props) => {
  return (
    <div className="tile small-12 callout">
      <Link to={`/trips/${props.tripData.id}`}>
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="location" className="tile-left cell small-6">{props.tripData.location}</h2>
          <h2 id="date" className="tile-right cell small-4">{props.date}</h2>
        </div>
        <div className="grid-y">
          <div className="grid-x grid-padding-x align-justify">
            <h3 className="climbs-type tile-left cell small-6">Boulding, Top Rope</h3>
            <h3 id="time" className="tile-right cell small-4">{props.tripData.elapsed_time} minutes</h3>
          </div>
          <h3 className="completes-attempts tile-climb-num">6 / 12 complete</h3>
        </div>
      </Link>
    </div>
  )
}

export default TripTile
