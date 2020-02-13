import React from 'react'

const ClimbShowPage = (props) => {
  return(
    <div>
      <h1 id="top-line">{props.climbType} Climb on a {props.wallType} Wall</h1>
      <div className="tile callout">
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="grade">Grade: {props.grade}</h2>
          <h2 id="complete-status" className="tile-right">{props.completeStatus}</h2>
        </div>
        <h2 id="hold-types">Hold Types: {props.holdTypes}</h2>
        <h3 id="crux" className="info">{props.crux}</h3>
      </div>
    </div>
  )
}

export default ClimbShowPage
