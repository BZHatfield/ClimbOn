import React, { useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'

const UserShowContainer = (props) => {
  const [ climbs, setClimbs ] = useState([])

  let userId = props.match.params.id

  useEffect(() => {
    window.scrollTo(0, 0)

    fetch(`/api/v1/charts/${userId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(response => {
      setClimbs(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let wallHeader = ['Wall Type', 'Times']
  let verticalNumber = 0
  let overhangNumber = 0
  let slabNumber = 0

  climbs.map((climb) => {
    // debugger
    if (climb.wall_type == "Vertical") {
      verticalNumber++
    }
    if (climb.wall_type == "Overhang") {
      overhangNumber++
    }
    if (climb.wall_type == "Slab") {
      slabNumber++
    }
  })

  let wallData = [wallHeader, ['Vertical', verticalNumber], ['Overhang', overhangNumber], ['Slab', slabNumber]]

  return(
    <div className="log-in">
      <h1>Your Climbing Charts</h1>
      <div className="grid-x grid-padding-x">
        <div className="card">
          <div className="chart-title">
            <h3>Wall Types Chart</h3>
          </div>
          <Chart
          chartType="PieChart"
          data={wallData}
          options={{}}
          graph_id="WallChart"
          width="50vw"
          height="25vh"
          />
        </div>
      </div>
    </div>
  )
}

export default UserShowContainer
