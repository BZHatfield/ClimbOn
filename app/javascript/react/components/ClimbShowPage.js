import React from 'react'

const ClimbShowPage = (props) => {

  return(
    <div>
      <h1 id="top-line">{props.climbInfo.climb_type} Climb on a {props.climbInfo.wall_type} Wall</h1>
      <div className="tile callout">
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="grade">Grade: {props.climbInfo.grade}</h2>
          <h2 id="complete-status" className="tile-right">{props.completeStatus}</h2>
        </div>
        <h2 id="hold-types">Hold Types: {props.climbInfo.hold_types}</h2>
        <h3 id="crux" className="info">{props.climbInfo.crux}</h3>
      </div>
    </div>
  )
}

export default ClimbShowPage
