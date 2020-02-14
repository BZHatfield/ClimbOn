import React from 'react'
import { Link } from 'react-router-dom'

const ClimbTile = (props) => {

  return(
    <div className="tile small-12 callout">
      <Link to={`/trips/${props.tripId}/climbs/${props.id}`}>
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="climb-type" className="tile-left cell small-6">{props.climbType}</h2>
          <h2 id="grade" className="tile-right cell small-4">{props.grade}</h2>
        </div>
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="wall-type" className="tile-left cell small-6">{props.wallType}</h2>
          <h2 id="completed" className="tile-right cell small-4">{props.climbStatus}</h2>
        </div>
      </Link>
    </div>
  )
}

export default ClimbTile
