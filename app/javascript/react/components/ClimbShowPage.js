import React from 'react'
import { Link } from 'react-router-dom'

const ClimbShowPage = (props) => {

  return(
    <div className="info">
      <div className="grid-x align-center">
        <h1 className="top-line" id="top-line">{props.climbInfo.climb_type} Climb on a {props.climbInfo.wall_type} Wall</h1>
        <div className="small-6 small-centered text-center columns">
          <Link to={`/trips/${props.tripId}`}>
            <button className="button">Go back to the list of climbs</button>
          </Link>
        </div>
      </div>
      <div className="callout box-margin grid-x">
        <div className="align-justify">
          <h2 id="grade">Grade: {props.climbInfo.grade}</h2>
          <h2 id="complete-status">{props.completeStatus}</h2>
        <h2 id="hold-types">Hold Types: {props.climbInfo.hold_types}</h2>
        <h3 id="crux">Crux/Notes: {props.climbInfo.crux}</h3>
      </div>
      </div>
    </div>
  )
}

export default ClimbShowPage
