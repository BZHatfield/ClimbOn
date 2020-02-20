import React from 'react'
import { Link } from 'react-router-dom'

const ClimbShowPage = (props) => {

  return(
    <div className="tile">
      <div className="row">
        <div className="back small-6 small-centered text-center columns">
          <Link to={`/trips/${props.tripId}`}>
            <button className="button">Go back to the list of climbs</button>
          </Link>
        </div>
      </div>
      <h1 id="top-line">{props.climbInfo.climb_type} Climb on a {props.climbInfo.wall_type} Wall</h1>
      <div className="callout">
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="grade">Grade: {props.climbInfo.grade}</h2>
          <h2 id="complete-status" className="tile-right">{props.completeStatus}</h2>
        </div>
        <h2 id="hold-types">Hold Types: {props.climbInfo.hold_types}</h2>
        <h3 id="crux">Crux/Notes: {props.climbInfo.crux}</h3>
      </div>
    </div>
  )
}

export default ClimbShowPage
