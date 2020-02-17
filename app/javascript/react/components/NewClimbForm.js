import React from 'react'
import ErrorList from './ErrorList'
import _ from 'lodash'

const NewClimbForm = (props) => {

  return(
    <div>
      <h1>New Climb Attempt Form</h1>
      <form onSubmit={props.handleSubmit}>
        <ErrorList errors={props.errors}/>
        <label htmlFor="climbType">
          Climb Type:
          <input type="text" name="climbType" id="climbType"  onChange={props.handleInputChange} value={props.newClimb.climbType}/>
        </label>

        <label htmlFor="grade">
          Route Grade:
          <input type="text" name="grade" id="grade" onChange={props.handleInputChange} value={props.newClimb.grade}/>
        </label>

        <label htmlFor="wallType">
          Wall Type:
          <input type="text" name="wallType" id="wallType" onChange={props.handleInputChange} value={props.newClimb.wallType}/>
        </label>

        <label htmlFor="holdTypes">
          Climbing Hold Types:
          <input type="text" name="holdTypes" id="holdTypes" onChange={props.handleInputChange} value={props.newClimb.holdTypes}/>
        </label>

        <label htmlFor="crux">
          Crux / Notes:
          <textarea name="crux" id="crux" onChange={props.handleInputChange} value={props.newClimb.crux}/>
        </label>

        <label htmlFor="completed">
          Completed? (true or false)
          <input type="text" name="completed" id="completed" onChange={props.handleInputChange} value={props.newClimb.completed}/>
        </label>

        <input className="form-input" type="submit" id="submit"/>
        <br/>
        <input className="form-input" type="button" onClick={props.clearForm} value="Clear" />
      </form>
    </div>
  )
}

export default NewClimbForm
