import React from 'react'
import { Link } from 'react-router-dom'

const SessionTile = (props) => {
  return (
    <div className="tile small-12 callout">
      <Link to={`/sessions/${props.sessionData.id}`}>
        <div className="grid-x grid-padding-x align-justify">
          <h2 id="gym" className="tile-left cell small-6">{props.sessionData.gym}</h2>
          <h2 id="date" className="tile-right cell small-4">{props.date}</h2>
        </div>
        <div className="grid-y">
          <div className="grid-x grid-padding-x align-justify">
            <h3 className="climbs-type tile-left cell small-6">Boulding, Top Rope</h3>
            <h3 id="time" className="tile-right cell small-4">{props.sessionData.elapsed_time} minutes</h3>
          </div>
          <h3 className="completes-attempts tile-climb-num">6 / 12 complete</h3>
        </div>
      </Link>
    </div>
  )
}

export default SessionTile
