import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import ErrorList from './ErrorList'

const NewClimbContainer = (props) => {
  const [ errors, setErrors ] = useState("")
  const [ shouldRedirect, setShouldRedirect ] = useState(false)
  const [ checkboxes, setCheckboxes ] = useState([])
  const [ newTripId, setNewTripId] = useState("")
  const [ climbs, setClimbs ] = useState([])
  const [ newClimb, setNewClimb ] = useState({
    climbType: "",
    grade: "",
    wallType: "",
    crux: "",
    completed: ""
  })

  const handleInputChange = (event) => {
    setNewClimb({
      ...newClimb,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleCheckboxChange = (event) => {
    setCheckboxes(checkboxes.concat(event.currentTarget.value))
  }

  const clearForm = (event) => {
    setNewClimb({
      climbType: "",
      grade: "",
      wallType: "",
      holdTypes: [],
      crux: "",
      completed: ""
    })
  }

  let tripId = props.match.params.trip_id
  const addNewClimb = (formPayLoad) => {
    fetch(`/api/v1/trips/${tripId}/climbs`, {
      credentials: 'same-origin',
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayLoad)
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(response => {
      setClimbs([...climbs, response.climbs])
      setNewTripId(response.trip.id)
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  if (shouldRedirect) {
    return <Redirect to={`/trips/${newTripId}`} />
  }

  const validSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["climbType", "grade", "completed"]
    requiredFields.forEach((field) => {
      if (newClimb[field] === "") {
        submitErrors = {
          ...submitErrors, [field]: "can't be blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let payload = {climbData: newClimb, holdTypes: checkboxes}
    if (validSubmission()) {
      addNewClimb(payload)
    }
  }

  let grades = []
  const boulderGrades = ["", "VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12"]
  const ropeGrades = ["", "5.8", "5.9", "5.10-", "5.10+", "5.11-", "5.11", "5.11+", "5.12-", "5.12", "5.12+", "5.13-", "5.13+", "5.14-", "5.14+"]

  if (newClimb.climbType == "Bouldering") {
    grades = boulderGrades
  } else {
    grades = ropeGrades
  }

  return(
    <div className="new-climb-form">
      <div className="tile grid-container">
        <h1>New Climb Attempt Form</h1>
        <form className="climb-form" onSubmit={handleSubmit}>
          <ErrorList className="error" errors={errors}/>

          <label htmlFor="climbType">
            Climb Type:
            <select className="type" name="climbType" id="climbType" onChange={handleInputChange} value={newClimb.climbType}>
              <option value=""></option>
              <option value="Bouldering">Bouldering</option>
              <option value="Top Rope">Top Rope</option>
              <option value="Lead">Lead</option>
            </select>
          </label>

          <label htmlFor="grade">
            Route Grade:
            <select type="text" name="grade" id="grade" onChange={handleInputChange} value={newClimb.grade}>
              <option value={grades[0]}>{grades[0]}</option>
              <option value={grades[1]}>{grades[1]}</option>
              <option value={grades[2]}>{grades[2]}</option>
              <option value={grades[3]}>{grades[3]}</option>
              <option value={grades[4]}>{grades[4]}</option>
              <option value={grades[5]}>{grades[5]}</option>
              <option value={grades[6]}>{grades[6]}</option>
              <option value={grades[7]}>{grades[7]}</option>
              <option value={grades[8]}>{grades[8]}</option>
              <option value={grades[9]}>{grades[9]}</option>
              <option value={grades[10]}>{grades[10]}</option>
              <option value={grades[11]}>{grades[11]}</option>
              <option value={grades[12]}>{grades[12]}</option>
              <option value={grades[13]}>{grades[13]}</option>
              <option value={grades[14]}>{grades[14]}</option>
            </select>
          </label>

          <label htmlFor="wallType">
            Wall Type:
            <select type="text" name="wallType" id="wallType" onChange={handleInputChange} value={newClimb.wallType}>
              <option value=""></option>
              <option value="Slab">Slab</option>
              <option value="Vertical">Vertical</option>
              <option value="Overhang">Overhang</option>
            </select>
          </label>

          <fieldset htmlFor="holdTypes" value={checkboxes}>
            <legend>Climbing Hold Types:</legend>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Jug"/><label>Jug</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Ledge"/><label>Ledge</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Crimp"/><label>Crimp</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Pinch"/><label>Pinch</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Sloper"/><label>Sloper</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Pocket"/><label>Pocket</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Undercling"/><label>Undercling</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Flake"/><label>Flake</label>
            <input type="checkbox" name="holdTypes" id="holdTypes" onChange={handleCheckboxChange} value="Horn"/><label>Horn</label>
          </fieldset>

          <label htmlFor="crux">
            Crux / Notes:
            <textarea name="crux" id="crux" onChange={handleInputChange} value={newClimb.crux}/>
          </label>

          <fieldset htmlFor="completed" value={newClimb.completed}>
            <legend>Completed?</legend>
            <input type="radio" name="completed" id="completed" onChange={handleInputChange} value="true"/><label htmlFor="completed">True</label>
            <input type="radio" name="completed" id="completed" onChange={handleInputChange} value="false"/><label htmlFor="completed">False</label>
          </fieldset>

          <input className="form-input" type="submit" id="submit"/>
          <br/>
          <input className="form-input" type="button" onClick={clearForm} value="Clear" />
        </form>
      </div>
    </div>
  )
}

export default NewClimbContainer
