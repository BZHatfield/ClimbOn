import React from 'react'

const ClimbTile = (props) => {
  return(
    <div className="tile small-12 callout">
      <div className="grid-x grid-padding-x align-justify">
        <h2 id="climb-type" className="tile-left cell small-6">{props.climbData.climbType}</h2>
        <h2 id="grade" className="tile-right cell small-4">{props.climbData.grade}</h2>
      </div>
      <div className="grid-x grid-padding-x align-justify">
        <h2 id="wall-type" className="tile-left cell small-6">{props.climbData.wallType}</h2>
        <h2 id="completed" className="tile-right cell small-4">{props.climbStatus}</h2>
      </div>
    </div>
  )
}

export default ClimbTile
